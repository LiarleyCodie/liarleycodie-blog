import CardTag from '@/app/ui/CardTag'
// import type { Metadata, ResolvingMetadata } from 'next'
import Image from 'next/image'

interface IProps {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

const postData = {
  banner: {
    url: 'https://images.pexels.com/photos/2955704/pexels-photo-2955704.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1',
    author: 'Dani Muchow',
    original_url:
      'https://www.pexels.com/photo/asphalt-highway-time-lapse-photography-at-nighttime-2955704/',
    provider: 'Pexels',
    provider_url: 'https://www.pexels.com/',
    icon_url: '/cpu.svg',
  },
  title: 'The relation between wall clocks and processors',
  publicationDate: 'April 19, 2024',
  tags: ['Hardware', 'Potato', 'Apple II', 'PC', 'CPU'],
}

export async function generateMetadata({ params, searchParams }: IProps) {
  return {
    title: postData.title + ' | LiarleyCodie',
  }
}

export default function Posts({ params }: IProps) {
  const { id } = params
  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-200 dark:bg-gray-950 text-gray-700 dark:text-gray-400">
      {/* heading */}
      <div
        style={{
          backgroundImage: `url(${postData.banner.url})`,
        }}
        className="relative bg-center bg-cover flex flex-col w-full h-96 justify-end pb-2 items-center px-2 md:mt-20 bg-zinc-800"
      >
        <div className="absolute inset-0 m-auto flex w-52 opacity-20">
          <Image
            src={postData.banner.icon_url}
            alt=""
            width={64}
            height={64}
            style={{ width: '100%' }}
            draggable={false}
          />
        </div>
        <p
          className="text-sm font-light text-gray-200/50 hover:text-gray-200 duration-200"
          style={{ textShadow: '0 0 3px #00000077' }}
        >
          Photo by{' '}
          <a
            target="_blank"
            href={postData.banner.original_url}
            className="hover:text-indigo-300 duration-200"
          >
            <strong>{postData.banner.author}</strong>
          </a>{' '}
          on{' '}
          <a
            target="_blank"
            href={postData.banner.provider_url}
            className="hover:text-indigo-300 duration-200"
          >
            <strong>{postData.banner.provider}</strong>
          </a>
        </p>
      </div>

      <article className="mt-10 md:mt-20 mb-[30rem]  max-w-3xl w-full px-4 lg:px-0">
        <h1 className="text-center mb-4 md:mb-6 text-3xl md:text-4xl font-semibold leading-10 md:leading-[3.5rem] tracking-[.1rem]">
          {postData.title}
        </h1>

        <div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center relative before:absolute before:w-[60%] md:before:w-[80%] before:left-1/2 before:-translate-x-1/2 before:h-[1px] before:bg-gray-600/50 before:bottom-[-1rem]">
          <p className="flex-1 text-sm md:text-base text-indigo-700 dark:text-indigo-400/70">
            {postData.publicationDate}
          </p>
          <div className="relative before:left-1/2 before:-translate-x-1/2 before:w-[4px] before:rounded-full before:h-[4px] before:top-[-.66rem] before:absolute md:before:h-[130%] md:before:top-1/2 md:before:-translate-y-1/2 md:before:w-[1px] before:bg-gray-600/50 md:before:left-0 flex gap-2 flex-wrap justify-end flex-1">
            {postData.tags.map((tag, i) => (
              <CardTag key={i}>{tag}</CardTag>
            ))}
          </div>
        </div>
      </article>
    </main>
  )
}
