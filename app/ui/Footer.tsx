import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="flex items-center justify-center h-36 bg-gray-200 border-gray-300 dark:bg-gray-950 border-t dark:border-gray-900">
      <p className="flex flex-col md:flex-row items-center justify-center gap-1 font-light text-sm text-gray-500">
        <span>
          Built with love by{' '}
          <strong>
            <a
              href="/?error=notfound"
              className="dark:text-gray-400 text-gray-600 hover:text-indigo-600 dark:hover:text-indigo-400 duration-200"
              aria-label='this links redirects you to the official portfolio of the creator of this blog'
            >
              LiarleyCodie
            </a>
          </strong>
        </span>
        <Image
          src="/heart.png"
          alt="heart_icon.png"
          width={16}
          height={16}
          draggable="false"
        />
        <span>
          Online with love by{' '}
          <strong>
            <a
              target="_blank"
              href="https://vercel.com/"
              className="dark:text-gray-400 text-gray-600 hover:text-indigo-600 dark:hover:text-indigo-400 duration-200"
              rel="noopener noreferrer"
              aria-label="this link redirects you to the official Vercel website"
            >
              Vercel
            </a>
          </strong>
        </span>
      </p>
    </footer>
  )
}
