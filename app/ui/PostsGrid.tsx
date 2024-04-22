'use client'

import PostCard from './PostCard'
import { gridPosts } from '@/mock-data/GridPosts'

const GridData = gridPosts

export default function PostsGrid() {
  return (
    <section className="flex flex-wrap max-w-xs md:max-w-[37rem] md:gap-4 lg:max-w-4xl justify-center md:justify-start gap-6">
      {GridData.map((post, i) => (
        <PostCard
          title={post.title}
          description={post.description}
          publishedInDays={post.publicationDate}
          tags={post.tags}
          href={`/post/${post.path_id}`}
          recent={post.recent}
          key={i}
        />
      ))}
    </section>
  )
}
