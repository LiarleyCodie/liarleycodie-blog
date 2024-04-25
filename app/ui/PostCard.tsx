import CardTag from './CardTag'
import style from '@/app/ui/PostCard.module.css'
import { Star } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'

interface IPostCardProps {
  publication_date: string
  recent?: boolean
  tags: string[]
  href: string
  title: string
  description: string
  bannerUrl: string
}
function PostCard({
  publication_date = 'the publication date is a mistery',
  tags,
  href,
  title,
  description,
  recent,
  bannerUrl,
}: IPostCardProps) {
  return (
    <article
      className={`${recent && style.recentHighlight} overflow-hidden border dark:border-gray-800 border-gray-400 relative flex flex-col bg-gray-300 dark:bg-gray-900 w-72 h-fit rounded-md outline outline-2 outline-transparent hover:outline-gray-800/70 dark:hover:outline-gray-300/70 duration-200 group`}
    >
      <a href={href} aria-label="this card redirects to the corresponding post">
        <header className=" flex flex-col bg-indigo-600 w-full h-12 rounded-t-md">
          {recent && (
            <span className="absolute text-xs items-center justify-center gap-2 bg-indigo-300/50 pl-1 pr-4 py-1 flex w-fit m-2 rounded-full leading-3">
              <span className="bg-indigo-300 p-1 rounded-full">
                <Star
                  size={18}
                  className={`${style.starDoABarrelRoll} fill-indigo-600`}
                />
              </span>
              recent
            </span>
          )}
          <Image
            src={bannerUrl ?? ''}
            height={48}
            width={288}
            style={{
              height: '100%',
              width: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
            alt="post card banner"
          />
        </header>
      </a>

      <div className="px-4 pt-5 pb-3">
        {/* tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <CardTag key={i}>{tag}</CardTag>
          ))}
        </div>
      </div>
      <a
        href={href}
        aria-label="this card redirects to the corresponding post"
        className="px-4 pb-2 flex flex-col"
      >
        <section>
          <h2
            className="group-hover:text-gray-900 dark:group-hover:text-gray-300 text-gray-700 dark:text-gray-400 text-lg text-center mb-2 duration-200"
            aria-label={title}
          >
            {title}
          </h2>
          <p className="text-sm my-2 text-gray-600 dark:text-gray-500">{description}</p>
        </section>
        <footer>
          <span className="text-xs text-gray-600 dark:text-gray-500">{publication_date}</span>
        </footer>
      </a>
    </article>
  )
}

export default PostCard
