import Image from 'next/image'

interface IPictureProps {
  url: string
  alt?: string
  author?: string
  original_url?: string
  provider?: string
  provider_url?: string
  width: number
  height: number
}

export function Picture({
  url,
  alt = 'Image description not available',
  author = 'Unknown Author',
  original_url = '#',
  provider = 'Unknown Provider',
  provider_url = '#',
  width = 320,
  height = 320
}: IPictureProps) {
  return (
    <div className="group my-4 ">
      <picture className="w-5/6 ">
        <Image
          src={url?.trim() == '' || !url ? '/image_not_found.jpg' : url}
          alt={alt}
          width={width}
          height={height}
          className=" mx-auto"
        />
      </picture>
      <cite className="flex gap-1 w-full text-sm font-light justify-center text-gray-900/50 group-hover:text-gray-900 dark:text-gray-200/30 dark:group-hover:text-gray-200 duration-200">
        Photo by{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={original_url}
          className="hover:text-indigo-800 dark:hover:text-indigo-300 duration-200"
        >
          <strong>{author}</strong>
        </a>{' '}
        on{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={provider_url}
          className="hover:text-indigo-800 dark:hover:text-indigo-300 duration-200"
        >
          <strong>{provider}</strong>
        </a>
      </cite>
    </div>
  )
}
