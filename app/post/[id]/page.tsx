import CardTag from '@/app/ui/CardTag'
// import type { Metadata, ResolvingMetadata } from 'next'
import Image from 'next/image'
import linkIcon from '@/app/ui/images/link.svg'

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
  title: 'The relation between wall clocks and processors',
  publicationDate: 'April 19, 2024',
  tags: ['Hardware', 'Potato', 'Apple II', 'PC', 'CPU'],
}

export async function generateMetadata({ params, searchParams }: IProps) {
  return {
    title: postData.title + ' | LiarleyCodie',
  }
}

export default function Posts({ params }: IProps) {
  const { id } = params
  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-200 dark:bg-gray-950 text-gray-700 dark:text-gray-400">
      {/* banner */}
      <div
        style={{
          backgroundImage: `url(${postData.banner.url})`,
        }}
        className="relative bg-center bg-cover flex flex-col w-full h-96 justify-end pb-2 items-center px-2 md:mt-20 bg-zinc-800"
      >
        <div className="absolute inset-0 m-auto flex w-52 opacity-20 pointer-events-none">
          <Image
            src={postData.banner.icon_url}
            alt=""
            width={64}
            height={64}
            style={{ width: '100%' }}
            draggable={false}
          />
        </div>
        <p
          className="text-sm font-light text-gray-200/50 hover:text-gray-200 duration-200"
          style={{ textShadow: '0 0 3px #00000077' }}
        >
          Photo by{' '}
          <a
            target="_blank"
            href={postData.banner.original_url}
            className="hover:text-indigo-300 duration-200"
          >
            <strong>{postData.banner.author}</strong>
          </a>{' '}
          on{' '}
          <a
            target="_blank"
            href={postData.banner.provider_url}
            className="hover:text-indigo-300 duration-200"
          >
            <strong>{postData.banner.provider}</strong>
          </a>
        </p>
      </div>

      <article className="mt-10 md:mt-20 mb-[30rem]  max-w-3xl w-full px-4 lg:px-0">
        {/* heading */}
        <header>
          <h1 className="text-center mb-4 md:mb-6 text-3xl md:text-4xl font-semibold leading-10 md:leading-[3.5rem] tracking-[.1rem]">
            {postData.title}
          </h1>

          <footer
            role="contentinfo"
            className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center relative before:absolute before:w-[60%] md:before:w-[80%] before:left-1/2 before:-translate-x-1/2 before:h-[1px] before:bg-gray-600/50 before:bottom-[-1rem]"
          >
            <p className="flex-1 text-sm md:text-base text-indigo-700 dark:text-indigo-400/70">
              {postData.publicationDate}
            </p>
            <div className="relative before:left-1/2 before:-translate-x-1/2 before:w-[4px] before:rounded-full before:h-[4px] before:top-[-.66rem] before:absolute md:before:h-[130%] md:before:top-1/2 md:before:-translate-y-1/2 md:before:w-[1px] before:bg-gray-600/50 md:before:left-0 flex gap-2 flex-wrap justify-end flex-1">
              {postData.tags.map((tag, i) => (
                <CardTag key={i}>{tag}</CardTag>
              ))}
            </div>
          </footer>
        </header>

        {/* content */}
        <section className="mt-16 flex flex-col gap-4">
          <h2
            id={'What are States on React'.toLowerCase().replace(/\s+/g, '-')}
            className="text-2xl font-medium mb-4 scroll-mt-36"
          >
            <a
              href={`#${'What are States on React'.toLowerCase().replace(/\s+/g, '-')}`}
              className="group flex items-center gap-2 duration-200 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              What are States on React?
              <Image
                className="group-hover:opacity-100 opacity-0 duration-200"
                src={linkIcon}
                alt=""
                width={22}
              />
            </a>
          </h2>

          <p className="leading-8 font-normal text-gray-700 dark:text-gray-400/80">
            In React, a component's state refers to objects that determine the
            component's behavior and how it renders in the interface.
          </p>
          <p className="leading-8 font-normal text-gray-700 dark:text-gray-400/80">
            States are essential for handling data that changes over time, such
            as user input, API responses, interaction events, and more.
          </p>
          <p className="leading-8 font-normal text-gray-700 dark:text-gray-400/80">
            The main characteristic of state is that it is local and
            encapsulated within the component, that is, it is not directly
            accessible by other components unless it is passed explicitly.
          </p>

          <div className="group my-4">
            <picture className="w-5/6 mx-auto">
              <img
                src="https://images.unsplash.com/photo-1713403955914-b938e1bd1b2f?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="the golden gate bridge is silhouetted against the sunset"
              />
            </picture>
            <cite className="flex gap-1 w-full text-sm font-light justify-center text-gray-900/50 group-hover:text-gray-900 dark:text-gray-200/50 dark:group-hover:text-gray-200 duration-200">
              Photo by{' '}
              <a
                target="_blank"
                href="https://unsplash.com/photos/the-golden-gate-bridge-is-silhouetted-against-the-sunset-To4-hsfiA3A"
                className="hover:text-indigo-800 dark:hover:text-indigo-300 duration-200"
              >
                <strong>Kellen Riggin</strong>
              </a>{' '}
              on{' '}
              <a
                target="_blank"
                href="https://unsplash.com"
                className="hover:text-indigo-800 dark:hover:text-indigo-300 duration-200"
              >
                <strong>Unsplash</strong>
              </a>
            </cite>
          </div>

          <h2
            id={'Using useState with React'.toLowerCase().replace(/\s+/g, '-')}
            className="text-2xl font-medium mb-4 scroll-mt-36"
          >
            <a
              href={`#${'Using useState with React'.toLowerCase().replace(/\s+/g, '-')}`}
              className="group flex items-center gap-2 duration-200 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              Using useState with React?
              <Image
                className="group-hover:opacity-100 opacity-0 duration-200"
                src={linkIcon}
                alt=""
                width={22}
              />
            </a>
          </h2>

          <p className="leading-8 font-normal text-gray-700 dark:text-gray-400/80">
            The{' '}
            <code className="bg-indigo-500/10 px-2 py-1 rounded-md inline">
              useState
            </code>{' '}
            Hook is the simplest and most common way to add state to a
            functional component. Let's see how it can be implemented:
          </p>

          <code className="bg-indigo-500/10 px-4 py-2 rounded-md inline text-sm">
            <span>import React, &#123; useState &#125; from 'react'</span>
            <br />
            <br />
            <span>function Counter&#40;&#41; &#123;</span>
            <br />
            <span>
              &#160;&#160;const &#91;counter, setCounter&#93; =
              useState&#40;0&#41;
            </span>
            <br />
            <br />
            <span>&#160;&#160;function add&#40;&#41; &#123;</span>
            <br />
            <span>&#160;&#160;&#160;&#160;setCounter&#40;counter + 1&#41;</span>
            <br />
            <span>&#160; &#125;</span>
            <br />
            <br />
            <span>&#160;&#160;return &#40;</span>
            <br />
            <span>&#160;&#160;&#160;&#160;&lt;div&gt;</span>
            <br />
            <span>
              &#160;&#160;&#160;&#160;&#160;&#160;&lt;p&gt;Current counter:
              &#123;counter&#125;&lt;&#47;p&gt;
            </span>
            <br />
            <span>
              &#160;&#160;&#160;&#160;&#160;&#160;&lt;button
              onClick=&#123;add&#125;&gt;Add&lt;&#47;button&gt;
            </span>
            <br />
            <span>&#160;&#160;&#160;&#160;&lt;&#47;div&gt;</span>
            <br />
            <span>&#160;&#160;&#41;</span>
            <br />
            <span>&#125;</span>
          </code>
        </section>
      </article>
    </main>
  )
}
