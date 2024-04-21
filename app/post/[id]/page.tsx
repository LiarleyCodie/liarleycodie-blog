import Image from 'next/image'
import React from 'react'
import PostHeading from '@/app/ui/post/PostHeading'
import PostBanner from '@/app/ui/post/PostBanner'
import H2 from '@/app/ui/post/H2'
import { Picture } from '@/app/ui/post/Picture'

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
  heading: {
    title: 'The relation between wall clocks and processors',
    publicationDate: 'April 19, 2024',
    tags: ['Hardware', 'Potato', 'Apple II', 'PC', 'CPU'],
  },
  content: [
    { type: 'h2', text: 'What are States on React?' },
    {
      type: 'p',
      text: "In React, a component's state refers to objects that determine the component's behavior and how it renders in the interface.",
    },
    {
      type: 'p',
      text: 'States are essential for handling data that changes over time, such as user input, API responses, interaction events, and more.',
    },
    {
      type: 'p',
      text: 'The main characteristic of state is that it is local and encapsulated within the component, that is, it is not directly accessible by other components unless it is passed explicitly.',
    },
    {
      type: 'picture',
      image: {
        image_url:
          'https://images.unsplash.com/photo-1713403955914-b938e1bd1b2f?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        image_alt: 'the golden gate bridge is silhouetted against the sunset',
        image_author: 'Kellen Riggin',
        image_original_url:
          'https://unsplash.com/photos/the-golden-gate-bridge-is-silhouetted-against-the-sunset-To4-hsfiA3A',
        provider_name: 'Unsplash',
        provider_url: 'https://unsplash.com',
      },
    },
    { type: 'h2', text: 'Using useState with React?' },
    {
      type: 'p_a',
      content: [
        { type: 'text', text: 'The ' },
        { type: 'link', text: 'useState', href: '/' },
        {
          type: 'text',
          text: " Hook is the simplest and most common way to add state to a functional component. Let's see how it can be implemented:",
        },
      ],
    },
  ],
}

export async function generateMetadata({ params, searchParams }: IProps) {
  return {
    title: postData.heading.title + ' | LiarleyCodie',
  }
}

export default async function Posts({ params }: IProps) {
  const { id } = params
  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-200 dark:bg-gray-950 text-gray-700 dark:text-gray-400">
      <PostBanner
        author={postData.banner.author}
        icon_url={postData.banner.icon_url}
        original_url={postData.banner.original_url}
        provider={postData.banner.provider}
        provider_url={postData.banner.provider_url}
        url={postData.banner.url}
      />

      <article className="mt-10 md:mt-20 mb-[30rem]  max-w-3xl w-full px-4 lg:px-0">
        <PostHeading
          title={postData.heading.title}
          publicationDate={postData.heading.publicationDate}
          tags={postData.heading.tags}
        />

        {/* content */}
        <section className="mt-16 flex flex-col gap-4">
          {postData.content &&
            postData.content.map((content, i) =>
              content.type == 'h2' ? (
                <H2 key={i} id={content.text}>
                  {content.text}
                </H2>
              ) : content.type == 'p' ? (
                <p
                  key={i}
                  className="leading-8 font-normal text-gray-700 dark:text-gray-400/80"
                >
                  {content.text}
                </p>
              ) : content.type == 'picture' ? (
                <Picture
                  key={i}
                  alt={content.image?.image_alt}
                  author={content.image?.image_author}
                  original_url={content.image?.image_original_url}
                  provider={content.image?.provider_name}
                  provider_url={content.image?.provider_url}
                  url={content.image?.image_url}
                />
              ) : content.type == 'p_a' ? (
                <p
                  key={i}
                  className="leading-8 font-normal text-gray-700 dark:text-gray-400/80"
                >
                  {content?.content?.map((text, j) =>
                    text.type == 'text' ? (
                      text.text
                    ) : (
                      <a
                        key={j}
                        href={text.href}
                        className="text-indigo-700 hover:text-indigo-500 dark:text-indigo-500 dark:hover:text-indigo-400"
                      >
                        {text.text}
                      </a>
                    ),
                  )}
                </p>
              ) : (
                <></>
              ),
            )}
        </section>
      </article>
    </main>
  )
}
