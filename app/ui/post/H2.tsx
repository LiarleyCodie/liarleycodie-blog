import Image from 'next/image'
import linkIcon from '@/app/ui/images/link.svg'

interface IH2Props {
  id: string | undefined
  children: string | any
}

function H2({ id, children }: IH2Props) {
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

  const h2Term = children
    .toLowerCase()
    //@ts-ignore
    .replace(/[áâãéêíîóôõúûç]/g, (match) => accentMap[match] || match)
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')

  return (
    <h2 id={h2Term} className="text-2xl font-medium mb-4 scroll-mt-36">
      <a
        href={`#${h2Term}`}
        className="group flex items-center gap-2 duration-200 hover:text-indigo-600 dark:hover:text-indigo-400"
      >
        {children}
        <Image
          className="group-hover:opacity-100 opacity-0 duration-200"
          src={linkIcon}
          alt=""
          width={22}
        />
      </a>
    </h2>
  )
}

export default H2
