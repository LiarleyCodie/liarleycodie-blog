import Image from 'next/image'
import linkIcon from '@/app/ui/images/link.svg'

interface IH2Props {
  id: string | undefined
  children: string | any
}

function H2({ id, children }: IH2Props) {
  return (
    <h2
      id={id?.toLowerCase().replace(/\s+/g, '-')}
      className="text-2xl font-medium mb-4 scroll-mt-36"
    >
      <a
        href={`#${id?.toLowerCase().replace(/\s+/g, '-')}`}
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
