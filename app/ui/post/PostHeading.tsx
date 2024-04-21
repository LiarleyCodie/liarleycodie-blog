import CardTag from "../CardTag"

interface IPostHeadingProps {
  title: string
  publicationDate: string
  tags: string[]
}

function PostHeading({ title, publicationDate, tags }: IPostHeadingProps) {
  return (
    <header>
      <h1 className="text-center mb-4 md:mb-6 text-3xl md:text-4xl font-semibold leading-10 md:leading-[3.5rem] tracking-[.1rem]">
        {title}
      </h1>

      <footer
        role="contentinfo"
        className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center relative before:absolute before:w-[60%] md:before:w-[80%] before:left-1/2 before:-translate-x-1/2 before:h-[1px] before:bg-gray-600/50 before:bottom-[-1rem]"
      >
        <p className="flex-1 text-sm md:text-base text-indigo-700 dark:text-indigo-400/70">
          {publicationDate}
        </p>
        <div className="relative before:left-1/2 before:-translate-x-1/2 before:w-[4px] before:rounded-full before:h-[4px] before:top-[-.66rem] before:absolute md:before:h-[130%] md:before:top-1/2 md:before:-translate-y-1/2 md:before:w-[1px] before:bg-gray-600/50 md:before:left-0 flex gap-2 flex-wrap justify-end flex-1">
          {tags.map((tag, i) => (
            <CardTag key={i}>{tag}</CardTag>
          ))}
        </div>
      </footer>
    </header>
  )
}

export default PostHeading