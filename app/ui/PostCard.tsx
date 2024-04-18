import starIcon from '@/app/ui/images/sun-icon.svg'
import Image from 'next/image'
import CardTag from './CardTag'

interface IPostCardProps {
  children: React.ReactNode
  publishedInDays: number
  recent?: boolean
  tags: string[]
  href: string
}
function PostCard({
  children,
  publishedInDays,
  tags,
  href,
  recent,
}: IPostCardProps) {
  return (
    <a
      href={href}
      className="relative flex flex-col bg-gray-300 dark:bg-gray-900 w-72 h-fit rounded-md border border-transparent hover:border-gray-800 dark:hover:border-gray-300 duration-200 group "
      style={{
        boxShadow: `${recent ? '0 0 0 .6rem rgba(107, 114, 128, .5)' : ''}`,
      }}
    >
      <div className="bg-indigo-600 w-full h-44 rounded-t-md">
        {recent && (
          <span className="text-xs items-center justify-center gap-2 bg-indigo-300/50 pl-1 pr-4 py-1 flex w-fit m-2 rounded-full leading-3">
            <span className="bg-indigo-300 p-1 rounded-full">
              <Image src={starIcon} alt="" />
            </span>
            recent
          </span>
        )}
      </div>
      <div className="px-4 pt-5 pb-2">
        {/* tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <CardTag key={i}>{tag}</CardTag>
          ))}
        </div>
        <h2 className="group-hover:text-gray-700 dark:group-hover:text-gray-300 text-gray-500 dark:text-gray-400 text-lg text-center mt-4 mb-2 duration-200">
          {children}
        </h2>
        <span className="text-xs text-gray-500">
          há {publishedInDays} dias atrás
        </span>
      </div>
    </a>
  )
}

export default PostCard
