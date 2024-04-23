// 'use client'

import starIcon from '@/app/ui/images/star.svg'
import Image from 'next/image'
import CardTag from './CardTag'
import style from '@/app/ui/PostCard.module.css'

interface IPostCardProps {
  publishedIn: string
  recent?: boolean
  tags: string[]
  href: string
  title: string
  description: string
}
function PostCard({
  publishedIn = 'the publication date is a mistery',
  tags,
  href,
  title,
  description,
  recent,
}: IPostCardProps) {
  return (
    <article
      className={`${recent && style.recentHighlight} relative flex flex-col bg-gray-300 dark:bg-gray-900 w-72 h-fit rounded-md outline outline-2 outline-transparent hover:outline-gray-800/70 dark:hover:outline-gray-300/70 duration-200 group`}
    >
      <a href={href}>
        <header className="flex flex-col bg-indigo-600 w-full h-12 rounded-t-md">
          {recent && (
            <span className="text-xs items-center justify-center gap-2 bg-indigo-300/50 pl-1 pr-4 py-1 flex w-fit m-2 rounded-full leading-3">
              <span className="bg-indigo-300 p-1 rounded-full">
                <Image src={starIcon} alt="" width={16} className={`${style.starDoABarrelRoll}`} />
              </span>
              recent
            </span>
          )}
        </header>
      </a>

      <div className="px-4 pt-5">
        {/* tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <CardTag key={i}>{tag}</CardTag>
          ))}
        </div>
      </div>
      <a href={href} className="px-4 pb-2 flex flex-col">
        <section>
          <h2 className="group-hover:text-gray-700 dark:group-hover:text-gray-300 text-gray-500 dark:text-gray-400 text-lg text-center mt-4 mb-2 duration-200">
            {title}
          </h2>
          <p className="text-sm my-2 text-gray-500">{description}</p>
        </section>
        <footer>
          <span className="text-xs text-gray-500">
            {publishedIn}
          </span>
        </footer>
      </a>
    </article>
  )
}

export default PostCard
