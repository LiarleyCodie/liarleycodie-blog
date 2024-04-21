import Image from 'next/image'

interface IPictureProps {
  url: string | undefined
  alt: string | undefined
  author: string | undefined
  original_url: string | undefined
  provider: string | undefined
  provider_url: string | undefined
}

export function Picture({
  url,
  alt,
  author,
  original_url,
  provider,
  provider_url,
}: IPictureProps) {
  return (
    <div className="group my-4">
      <picture className="w-5/6 mx-auto">
        <Image
          src={url}
          alt={alt}
          width={1280}
          height={1280}
          style={{ width: '100%' }}
        />
      </picture>
      <cite className="flex gap-1 w-full text-sm font-light justify-center text-gray-900/50 group-hover:text-gray-900 dark:text-gray-200/30 dark:group-hover:text-gray-200 duration-200">
        Photo by{' '}
        <a
          target="_blank"
          href={original_url}
          className="hover:text-indigo-800 dark:hover:text-indigo-300 duration-200"
        >
          <strong>{author}</strong>
        </a>{' '}
        on{' '}
        <a
          target="_blank"
          href={provider_url}
          className="hover:text-indigo-800 dark:hover:text-indigo-300 duration-200"
        >
          <strong>{provider}</strong>
        </a>
      </cite>
    </div>
  )
}
