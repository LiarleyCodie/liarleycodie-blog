'use client'

import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { usePathname, useSearchParams } from 'next/navigation'
import { generatePagination } from '../lib/utils'
import clsx from 'clsx'

interface IPaginationControlProps {
  totalPages: number
}

export default function PaginationControl({
  totalPages,
}: IPaginationControlProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get('page')) || 1

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', pageNumber.toString())
    return `${pathname}?${params.toString()}`
  }

  const allPages = generatePagination(currentPage, totalPages)

  return (
    <>
      <div className="flex gap-2">
        <PaginationArrow
          href={createPageURL(currentPage - 1)}
          isDisabled={currentPage <= 1}
          direction="left"
        />
        {allPages.map((page) => (
          <PaginationNumber
            key={page}
            href={createPageURL(page)}
            isActive={currentPage == page}
            page={page}
          />
        ))}
        <PaginationArrow
          href={createPageURL(currentPage + 1)}
          isDisabled={currentPage >= totalPages}
          direction="right"
        />
      </div>
    </>
  )
}

function PaginationNumber({
  page,
  isActive,
  href,
}: {
  page: number | string
  isActive: boolean
  href: string
}) {
  const defaultClasses =
    'w-8 h-8 flex justify-center items-center rounded-md border text-sm select-none duration-200'

  return isActive || page == '...' ? (
    <a
      className={clsx(
        defaultClasses,
        page == '...'
          ? 'dark:bg-gray-900 dark:border-gray-800 dark:text-gray-600 bg-gray-300 border-gray-400 text-gray-500'
          : 'bg-indigo-200 border-indigo-700 text-indigo-800 dark:bg-indigo-950 dark:border-indigo-600 dark:text-indigo-500',
      )}
      aria-label="this link means that between the previous pagination and next there are many pages or you already are in the page"
    >
      {page}
    </a>
  ) : (
    <a
      className={clsx(
        defaultClasses,
        'hover:border-indigo-500 hover:dark:bg-gray-800 hover:text-indigo-700 dark:hover:text-indigo-500 hover:bg-gray-200 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400 bg-gray-300 border-gray-500 text-gray-600',
      )}
      href={href}
      aria-label="this link redirects you to the correspondent pagination number"
    >
      {page}
    </a>
  )
}

function PaginationArrow({
  href,
  direction,
  isDisabled,
}: {
  href: string
  direction: 'left' | 'right'
  isDisabled?: boolean
}) {
  const iconClasses = isDisabled
    ? 'dark:fill-gray-600 fill-gray-500'
    : 'group-hover:dark:fill-indigo-400 group-hover:fill-indigo-700 fill-gray-900 dark:fill-gray-300'

  const icon =
    direction == 'left' ? (
      <CaretLeft size={18} className={iconClasses} />
    ) : (
      <CaretRight size={18} className={iconClasses} />
    )

  const defaultClasses =
    'group w-8 h-8 rounded-md flex justify-center items-center border duration-200'

  return isDisabled ? (
    <a
      className={clsx(
        defaultClasses,
        'dark:bg-gray-900 dark:border-gray-800 dark:fill-gray-500 bg-gray-300 border-gray-400',
      )}
      aria-label='this button means you cannot go to the previous or next pagination'
    >
      {icon}
    </a>
  ) : (
    <a
      className={clsx(
        defaultClasses,
        'dark:bg-gray-900 dark:border-gray-700 hover:border-indigo-500 bg-gray-300 border-gray-500 hover:bg-gray-200 dark:hover:bg-gray-800',
      )}
      href={href}
      aria-label='this links jumps to the previous or next pagination'
    >
      {icon}
    </a>
  )
}
