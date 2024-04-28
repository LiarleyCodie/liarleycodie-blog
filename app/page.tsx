import PostsGrid from './ui/PostsGrid'
import PaginationControl from './ui/PaginationControl'
import DOMPurify from 'isomorphic-dompurify'
import Image from 'next/image'
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import { IPost } from './definitions/PostCard'
import Notification from './ui/Notification'
import 'dotenv/config'
import { HomeBanner } from './ui/HomeBanner'
import { getGridPosts, getTotalGridPosts, searchPosts } from './lib/prismaDb'

// ! FIX: improve the database response caching

interface IHomeProps {
    params: {}
    searchParams: { [id: string]: string }
}

export default async function Home({ searchParams }: IHomeProps) {
    const { page, search, error } = searchParams
    let count: number
    let gridPosts: IPost[] | any

    if (search) {
        const term = DOMPurify.sanitize(search ?? '')
        let result = await searchPosts(term, Number(page) || 1)
        gridPosts = result.data
        count = result.totalPages
    } else {
        gridPosts = await getGridPosts()
        count = await getTotalGridPosts()
    }

    return (
        <main className="min-h-screen items-center gap-16 flex flex-col pb-16 bg-gray-200 dark:bg-gray-950">
            {/* heading */}
            <HomeBanner backgroundPosition="bottom" />

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
