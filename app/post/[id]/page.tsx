import React from 'react'
import PostHeading from '@/app/ui/post/PostHeading'
import PostBanner from '@/app/ui/post/PostBanner'
import H2 from '@/app/ui/post/H2'
import { Picture } from '@/app/ui/post/Picture'
import DOMPurify from 'isomorphic-dompurify'
import dayjs from 'dayjs'
import { IPostData } from '@/app/definitions/PostPage'
import { getPostData } from '@/app/lib/databaseConnection'
import { redirect } from 'next/navigation'


interface IProps {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: IProps) {
  const data = Array.from(await getPostData(params.id))[0]

  if (data) {
    const postData: IPostData = JSON.parse(data?.post_data)
    return {
      title: postData.heading.title + ' | LiarleyCodie',
    }
  } else {
    return redirect('/?error=notfound')
  }
}

export default async function Posts({ params }: IProps) {
  const data = Array.from(await getPostData(params.id))[0]

  if (data) {
    const postData: IPostData = JSON.parse(data?.post_data)
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
            publicationDate={dayjs(
              postData?.heading.publicationDate ?? 0,
            ).format('MMMM D, YYYY')}
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
  } else {
    return redirect('/?error=notfound')
  }
}
