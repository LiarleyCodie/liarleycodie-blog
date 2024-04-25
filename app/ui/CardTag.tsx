interface ICardTagProps {
  children: string
}
function CardTag({ children }: ICardTagProps) {
  const accentMap = {
    á: 'a',
    â: 'a',
    ã: 'a',
    é: 'e',
    ê: 'e',
    í: 'i',
    î: 'i',
    ó: 'o',
    ô: 'o',
    õ: 'o',
    ú: 'u',
    û: 'u',
    ç: 'c',
  }

  const tagTerm = children
    .toLowerCase()
    //@ts-ignore
    .replace(/[áâãéêíîóôõúûç]/g, (match) => accentMap[match] || match)
    .replace(/[^a-z0-9]+/g, '-')

  return (
    <a
      href={`/?search=${tagTerm}`}
      className="flex justify-center items-center w-fit bg-indigo-600/20 leading-3 px-2 py-1 rounded-md dark:text-indigo-400/60 text-indigo-800/80 hover:text-indigo-800 text-xs font-medium hover:bg-indigo-800/30 dark:hover:text-indigo-400 duration-200"
      aria-label='this tag redirects to the home page and search for the tag'
    >
      {children}
    </a>
  )
}

export default CardTag
