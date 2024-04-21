'use client'

import PostCard from './PostCard'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'

export default function PostsGrid() {
  const arr = new Array(6).fill(false)
  arr[0] = true

  return (
    <section className="flex flex-wrap max-w-xs md:max-w-[37rem] md:gap-4 lg:max-w-4xl justify-center md:justify-start gap-6">
      {arr.map((recent, i) => (
        <PostCard
          title="The relation between wall clocks and processors"
          description="O conceito de estados em React é fundamental para o desenvolvimento de aplicações interativas e dinâmicas."
          publishedInDays={5403}
          tags={['Hardware', 'Potato', 'Apple II', 'PC', 'CPU']}
          href={`/post/${'The relation between wall clocks and processors'.toLowerCase().replace(/\s+/g, '-')}`}
          recent={recent}
          key={i}
        />
      ))}
    </section>
  )
}
