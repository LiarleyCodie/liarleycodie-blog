import PostCard from './PostCard'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/es'

interface IPostGridProps {
  gridPosts: {
    title: string
    description: string
    publication_date: number
    tags: string[]
    path_id: string
    recent: boolean
    id: number
  }[]
}

export default function PostsGrid({ gridPosts }: IPostGridProps) {
  dayjs.extend(relativeTime)
  return (
    <section className="flex flex-wrap max-w-xs md:max-w-[37rem] md:gap-4 lg:max-w-4xl justify-center md:justify-start gap-6">
      {gridPosts.map((post, i) => (
        <PostCard
          title={post.title}
          description={post.description}
          publishedIn={dayjs((new Date(post.publication_date).getTime())).fromNow()}
          tags={post.tags}
          href={`/post/${post.path_id}`}
          recent={post.recent}
          key={i}
        />
      ))}
    </section>
  )
}
