import React from 'react'
import PostHeading from '@/app/ui/post/PostHeading'
import PostBanner from '@/app/ui/post/PostBanner'
import H2 from '@/app/ui/post/H2'
import { Picture } from '@/app/ui/post/Picture'
import DOMPurify from 'isomorphic-dompurify'
import dayjs from 'dayjs'

interface IProps {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

interface IPostData {
  banner: {
    url: string
    author: string
    original_url: string
    provider_name: string
    provider_url: string
    icon_url: string
  }
  heading: {
    title: string
    publicationDate: number
    tags: string[]
  }
  content: {
    type: string
    text?: string
    image?: {
      image_url: string
      image_alt: string
      image_author: string
      image_original_url: string
      provider_name: string
      provider_url: string
    }
    content?: {
      type: string
      text?: string
      href?: string
    }[]
    list?: string[]
  }[]
}

const postData: IPostData = {
  banner: {
    url: 'https://images.pexels.com/photos/2955704/pexels-photo-2955704.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1',
    author: 'Dani Muchow',
    original_url:
      'https://www.pexels.com/photo/asphalt-highway-time-lapse-photography-at-nighttime-2955704/',
    provider_name: 'Pexels',
    provider_url: 'https://www.pexels.com/',
    icon_url: '/cpu.svg',
  },
  heading: {
    title: "What's Wrong With Assembly Language",
    publicationDate: 1713750085236,
    tags: ['Hardware', 'ASM', 'Apple II', 'PC', 'CPU'],
  },
  content: [
    {
      type: 'h2',
      text: 'Assembly language has a pretty bad reputation',
    },
    {
      type: 'p',
      text: 'The common impression about assembly language programmers today is that they are all hackers or misguided individuals who need enlightenment.',
    },
    {
      type: 'p',
      text: 'Here are the reasons people give for not using assembly:',
    },
    {
      type: 'ul',
      list: [
        'Assembly is hard to learn.',
        'Assembly is hard to read and understand.',
        'Assembly is hard to debug.',
        'Assembly is hard to maintain.',
        'Assembly is hard to write.',
        'Assembly language programming is time consuming.',
        'Improved compiler technology has eliminated the need for assembly language.',
        'Today, machines are so fast that we no longer need to use assembly.',
        'If you need more speed, you should use a better algorithm rather than switch to assembly language.',
        'Machines have so much memory today, saving space using assembly is not important.',
        'Assembly language is not portable.',
      ],
    },
    {
      type: 'p_a_strong_em',
      content: [
        { type: 'text', text: 'An ' },
        { type: 'em', text: 'old joke' },
        { type: 'strong', text: ' goes ' },
        { type: 'link', text: 'something', href: '/' },
        { type: 'text', text: ' like this' },
      ],
    },
    {
      type: 'p_a_strong_em',
      content: [
        { type: 'text', text: 'An ' },
        { type: 'em', text: 'old joke' },
        { type: 'strong', text: ' goes ' },
        { type: 'link', text: 'something', href: '/' },
        { type: 'text', text: ' like this' },
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
  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-200 dark:bg-gray-950 text-gray-700 dark:text-gray-400">
      <PostBanner
        author={postData?.banner.author ?? ''}
        icon_url={postData?.banner.icon_url ?? ''}
        original_url={postData?.banner.original_url ?? ''}
        provider_name={postData?.banner.provider_name ?? ''}
        provider_url={postData?.banner.provider_url ?? ''}
        url={postData?.banner.url ?? ''}
      />

      <article className="mt-10 md:mt-20 mb-[30rem]  max-w-3xl w-full px-4 lg:px-0">
        <PostHeading
          title={postData?.heading.title ?? ''}
          publicationDate={dayjs(postData?.heading.publicationDate ?? 0).format(
            'MMMM D, YYYY',
          )}
          tags={postData?.heading.tags ?? ['']}
        />

        {/* content */}
        <section className="mt-16 flex flex-col gap-4">
          {postData?.content &&
            postData.content.map((content, i) => {
              const sanitizedText = DOMPurify.sanitize(content.text ?? '')

              return content.type == 'h2' ? (
                <H2 key={i} id={sanitizedText}>
                  {sanitizedText}
                </H2>
              ) : content.type == 'p' ? (
                <p
                  key={i}
                  className="leading-8 font-normal text-gray-700 dark:text-gray-400/80"
                >
                  {sanitizedText}
                </p>
              ) : content.type == 'picture' ? (
                <Picture
                  key={i}
                  alt={content.image?.image_alt}
                  author={content.image?.image_author}
                  original_url={DOMPurify.sanitize(
                    content.image?.image_original_url ?? '',
                  )}
                  provider={content.image?.provider_name}
                  provider_url={content.image?.provider_url}
                  url={DOMPurify.sanitize(content.image?.image_url ?? '')}
                  height={720}
                  width={720}
                />
              ) : content.type == 'p_a_strong_em' ? (
                <p
                  key={i}
                  className="leading-8 font-normal text-gray-700 dark:text-gray-400/80"
                >
                  {content?.content?.map((text, j) => {
                    const anotherSanitizedText = DOMPurify.sanitize(
                      text.text ?? '',
                    )

                    return text.type == 'text' ? (
                      <React.Fragment key={j}>
                        {anotherSanitizedText}
                      </React.Fragment>
                    ) : text.type == 'link' ? (
                      <a
                        key={j}
                        href={DOMPurify.sanitize(text.href ?? '')}
                        className="text-indigo-700 hover:text-indigo-500 dark:text-indigo-500 dark:hover:text-indigo-400"
                      >
                        {anotherSanitizedText}
                      </a>
                    ) : text.type == 'strong' ? (
                      <strong key={j}>{anotherSanitizedText}</strong>
                    ) : (
                      <em key={j}>{anotherSanitizedText}</em>
                    )
                  })}
                </p>
              ) : content.type == 'ul' ? (
                <ul key={i}>
                  {content.list?.map((text, j) => (
                    <li
                      key={j}
                      className="list-disc ml-8 text-gray-700 dark:text-gray-400/80"
                    >
                      {text}
                    </li>
                  ))}
                </ul>
              ) : (
                <React.Fragment key={i} />
              )
            })}
        </section>
      </article>
    </main>
  )
}
