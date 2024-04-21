import Image from "next/image"

interface IPostBannerProps {
  url: string
  icon_url: string
  author: string
  original_url: string
  provider: string
  provider_url: string
}

function PostBanner({
  url,
  icon_url,
  author,
  original_url,
  provider,
  provider_url,
}: IPostBannerProps) {
  return (
    <div
      style={{
        backgroundImage: `url(${url})`,
      }}
      className="relative bg-center bg-cover flex flex-col w-full h-96 justify-end pb-2 items-center px-2 md:mt-20 bg-zinc-800"
    >
      <div className="absolute inset-0 m-auto flex w-52 opacity-20 pointer-events-none">
        <Image
          src={icon_url}
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
          href={original_url}
          className="hover:text-indigo-300 duration-200"
        >
          <strong>{author}</strong>
        </a>{' '}
        on{' '}
        <a
          target="_blank"
          href={provider_url}
          className="hover:text-indigo-300 duration-200"
        >
          <strong>{provider}</strong>
        </a>
      </p>
    </div>
  )
}

export default PostBanner