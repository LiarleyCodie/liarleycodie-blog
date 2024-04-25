import PostsGrid from './ui/PostsGrid'
import PaginationControl from './ui/PaginationControl'
import { Suspense } from 'react'
import { select, getTotalPages, find } from './lib/databaseConnection'
import SearchBar from './ui/SearchBar'
import DOMPurify from 'isomorphic-dompurify'

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
  const { page, search } = searchParams
  let count: number;
  let gridPosts: IPost[] | any; 

  if (search) {
    const term = DOMPurify.sanitize(search ?? '')
    // console.log(await find(term))
    let result = await find(term, Number(page) || 1)
    gridPosts = result.data
    count = result.totalPages
  } else {
    gridPosts = Array.from(await select(Number(page || 1)))
    count = await getTotalPages()
  }

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
      arial-label='Banner section'
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
            aria-label='Image link on the original plataform'
          >
            <strong>{photoAuthorName}</strong>
          </a>{' '}
          on{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={providerUrl}
            className="hover:text-indigo-300 duration-200"
            aria-label='official platform where the image was obtained from'
          >
            <strong>{providerName}</strong>
          </a>
        </p>
      </div>
    </div>
  )
}
