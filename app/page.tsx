import PostsGrid from './ui/PostsGrid'
import PaginationControl from './ui/PaginationControl'
import { select, getTotalPages, find } from './lib/databaseConnection'
import SearchBar from './ui/SearchBar'
import DOMPurify from 'isomorphic-dompurify'
import Image from 'next/image'
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import { IPost } from './definitions/PostCard'
import Notification from './ui/Notification'
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'
import 'dotenv/config'

// ! FIX: improve the database response caching

interface IHomeProps {
    params: {}
    searchParams: { [id: string]: string }
}

export const verifyJWT = (token: any, currentPage: string = 'page') => {
    const { JWT_SECRET } = process.env

    if (JWT_SECRET) {
        try {
            const decoded = jwt.verify(token, JWT_SECRET) as {
                isAdmin: boolean
            }

            if (decoded && decoded?.isAdmin) {
                return true
            }
            return false
        } catch (err) {
            console.log(
                `\n> ❌ [${currentPage} | verifyJWT]: Error verifying JWT token`,
            )
            console.error(err)
            return false
        }
    } else {
        console.log(
            `\n> ❌ [${currentPage} | verifyJWT]: JWT_SECRET is undefined`,
        )
        console.error({ message: 'JWT_SECRET is undefined' })
        return false
    }
}

export default async function Home({ searchParams }: IHomeProps) {
    const { page, search, error } = searchParams
    let count: number
    let gridPosts: IPost[] | any
    let isAdmin = false

    if (search) {
        const term = DOMPurify.sanitize(search ?? '')
        let result = await find(term, Number(page) || 1)
        gridPosts = result.data
        count = result.totalPages
    } else {
        gridPosts = Array.from(await select(Number(page || 1)))
        count = await getTotalPages()
    }

    const authCookie = cookies().get('auth')

    if (authCookie) {
        isAdmin = verifyJWT(authCookie?.value, '/')
    }
    
    console.log('admin mode:', isAdmin)
    return (
        <main className="min-h-screen items-center gap-16 flex flex-col pb-16 bg-gray-200 dark:bg-gray-950">
            {/* heading */}
            <HomeBanner
                bannerUrl="https://images.unsplash.com/photo-1532272037986-b930d0b26075?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                mantra="Welcome my friend!"
                photoAuthorName="Klemen Vrankar"
                photoAuthorUrl="https://unsplash.com/photos/starry-night-RrSG1hDo8ew"
                providerName="Unsplash"
                providerUrl="https://unsplash.com/"
                backgroundPosition="bottom"
            />

            {gridPosts.length ? (
                <PostsGrid gridPosts={gridPosts} />
            ) : (
                <div className="flex flex-col items-center gap-4">
                    <h1 className="text-3xl dark:text-gray-500 text-gray-600">
                        Nothing was found!
                    </h1>
                    <Image
                        className="opacity-70"
                        draggable={false}
                        src="/pensive_face.webp"
                        width={128}
                        height={128}
                        alt="pensive_face.webp"
                    />
                    <a
                        className="group flex items-center gap-1 text-xl dark:text-indigo-300 dark:hover:text-indigo-500 text-indigo-900 hover:text-indigo-600 duration-200"
                        href="/"
                    >
                        How about seeing all the posts?
                        <ArrowUpRight size={24} className="animate-bounce" />
                    </a>
                </div>
            )}

            <PaginationControl totalPages={count} />

            {error == 'notfound' && <Notification />}
        </main>
    )
}

interface IHomeBannerProps {
    bannerUrl: string
    mantra: string
    photoAuthorName: string
    photoAuthorUrl: string
    providerName: string
    providerUrl: string
    backgroundPosition?: 'bottom' | 'center' | 'top' | string
}

function HomeBanner({
    backgroundPosition = 'center',
    bannerUrl,
    mantra,
    photoAuthorName,
    photoAuthorUrl,
    providerName,
    providerUrl,
}: IHomeBannerProps) {
    return (
        <div
            style={{
                backgroundImage: `url("${bannerUrl}")`,
                backgroundPosition: backgroundPosition,
            }}
            arial-label="Banner section"
            className={`bg-cover flex flex-col w-full h-96 justify-center items-center px-2 md:mt-20 bg-zinc-800`}
        >
            <div className="flex-1"></div>
            <div className="flex flex-col justify-between mb-2 items-center flex-1 w-full">
                <h1 className=" px-2 max-w-[25rem] opacity-80 text-2xl font-light text-center leading-10">
                    {mantra}
                </h1>

                {/* search bar */}
                <SearchBar />

                <p
                    className="text-sm font-light text-gray-200/50 hover:text-gray-200 duration-200"
                    style={{ textShadow: '0 0 3px #00000077' }}
                >
                    Photo by{' '}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={photoAuthorUrl}
                        className="hover:text-indigo-300 duration-200"
                        aria-label="Image link on the original plataform"
                    >
                        <strong>{photoAuthorName}</strong>
                    </a>{' '}
                    on{' '}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={providerUrl}
                        className="hover:text-indigo-300 duration-200"
                        aria-label="official platform where the image was obtained from"
                    >
                        <strong>{providerName}</strong>
                    </a>
                </p>
            </div>
        </div>
    )
}
