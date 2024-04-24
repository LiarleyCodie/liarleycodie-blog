import searchIcon from '@/app/ui/images/search-icon.svg'
import Image from 'next/image'
import PostsGrid from './ui/PostsGrid'
import PaginationControl from './ui/PaginationControl'
import { Suspense } from 'react'
import { select, getTotalPages } from './lib/databaseConnection'

interface IPost {
  title: string
  description: string
  publication_date: number
  tags: string[]
  recent: boolean
  path_id: string
  id: number
}

interface IHomeProps {
  params: {}
  searchParams: { [id: string]: string }
}

export default async function Home({ params, searchParams }: IHomeProps) {
  const { page } = searchParams
  const gridPosts: IPost[] | any = Array.from(await select(Number(page || 1)))

  const count = await getTotalPages()

  return (
    <main className="min-h-screen items-center gap-16 flex flex-col pb-16 bg-gray-200 dark:bg-gray-950">
      {/* heading */}
      <div
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1603722796411-de70d5b992e3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }}
        className="bg-center bg-cover flex flex-col w-full h-96 justify-center items-center px-2 md:mt-20 bg-zinc-800"
      >
        <div className="flex-1"></div>
        <div className="flex flex-col justify-between mb-2 items-center flex-1 w-full">
          <h1 className=" px-2 max-w-[25rem] opacity-80 text-2xl font-light text-center leading-10">
            <strong>Welcome my friend!</strong>
          </h1>

          {/* search bar */}
          <div className="border focus-within:border-gray-200 focus-within:outline-gray-200/30 outline outline-4 outline-gray-200/0 border-gray-400 bg-gray-200/5 rounded-full flex w-full max-w-xl duration-200">
            <input
              type="search"
              autoComplete="off"
              className="bg-transparent text-sm flex-1 outline-none font-normal pl-4 pr-2 py-2"
              placeholder="what is the Turbo button on my apple II?"
            />
            <button className="bg-gray-200 rounded-r-full w-16 flex justify-center items-center pr-1 hover:bg-gray-300 active:bg-gray-400 duration-200">
              <Image src={searchIcon} alt="" width={18} />
            </button>
          </div>

          <p
            className="text-sm font-light text-gray-200/50 hover:text-gray-200 duration-200"
            style={{ textShadow: '0 0 3px #00000077' }}
          >
            Photo by{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://unsplash.com/photos/time-lapse-photography-of-lights-Lb_mgwPUxeM"
              className="hover:text-indigo-300 duration-200"
            >
              <strong>Ben Collins</strong>
            </a>{' '}
            on{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://unsplash.com/"
              className="hover:text-indigo-300 duration-200"
            >
              <strong>Unsplash</strong>
            </a>
          </p>
        </div>
      </div>

      {/* Suspense need to be improved! */}
      <Suspense fallback={<p>Loading posts...</p>}>
        <PostsGrid gridPosts={gridPosts} />
      </Suspense>

      <PaginationControl totalPages={count} />
    </main>
  )
}

export function PostsGridSkeleton() {
  const x = [1, 2, 3, 4, 5, 6]
  return (
    <section className="flex flex-wrap max-w-xs md:max-w-[37rem] md:gap-4 lg:max-w-4xl justify-center md:justify-start gap-6">
      {x.map((_, i) => (
        <article
          key={i}
          className="flex flex-col w-72 h-80 bg-gray-900 rounded-md"
        >
          <div className="flex w-full h-16 bg-gray-800 rounded-t-md"></div>
          <div className="px-6 py-5">
            <div className="flex w-full mb-2 h-5 rounded-full bg-gray-800"></div>
            <div className="flex w-20 h-5 rounded-full bg-gray-800"></div>
          </div>
        </article>
      ))}
      <article className="flex flex-col w-72 h-80 bg-gray-900 rounded-md">
        <div className="flex w-full h-16 bg-gray-800 rounded-t-md"></div>
        <div className="px-6 py-5">
          <div className="flex w-full mb-2 h-5 rounded-full bg-gray-800"></div>
          <div className="flex w-20 h-5 rounded-full bg-gray-800"></div>
        </div>
      </article>
    </section>
  )
}
