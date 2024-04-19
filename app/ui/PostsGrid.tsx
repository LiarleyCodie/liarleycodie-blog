import PostCard from './PostCard'

export default function PostsGrid() {
  return (
    <div>
      <div className="flex flex-wrap max-w-xs md:max-w-[37rem] md:gap-4 lg:max-w-4xl justify-center md:justify-start gap-6 mb-12">
        <PostCard
          publishedInDays={5403}
          tags={['Hardware', 'Potato', 'Apple II', 'PC', 'CPU']}
          href="/post/1"
          recent
        >
          The relation between wall clocks and processors
        </PostCard>
        <PostCard
          publishedInDays={5403}
          tags={['Hardware', 'Potato', 'Apple II', 'PC', 'CPU']}
          href="/post/22"
        >
          The relation between wall clocks and processors
        </PostCard>
        <PostCard
          publishedInDays={5403}
          tags={['Hardware', 'Potato', 'Apple II', 'PC', 'CPU']}
          href="/post/333"
        >
          The relation between wall clocks and processors
        </PostCard>
        <PostCard
          publishedInDays={5403}
          tags={['Hardware', 'Potato', 'Apple II', 'PC', 'CPU']}
          href="/post/4444"
        >
          The relation between wall clocks and processors
        </PostCard>
      </div>
    </div>
  )
}
