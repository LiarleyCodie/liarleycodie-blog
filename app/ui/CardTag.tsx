interface ICardTagProps {
  children: React.ReactNode
}
function CardTag({ children }: ICardTagProps) {
  return (
    <a
      href={`/?search=${children}`}
      className="flex justify-center items-center w-fit bg-indigo-600/20 leading-3 px-2 py-1 rounded-md dark:text-indigo-400/60 text-indigo-800/80 hover:text-indigo-800 text-xs font-medium hover:bg-indigo-800/30 dark:hover:text-indigo-400 duration-200"
    >
      {children}
    </a>
  )
}


export default CardTag