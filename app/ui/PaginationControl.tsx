'use client'

import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { usePathname, useSearchParams } from 'next/navigation'
import { generatePagination } from '../lib/utils'

interface IPaginationControlProps {
  // amountOfPosts: number
  totalPages: number
}

export default function PaginationControl({
  // amountOfPosts,
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
        {allPages.map((page, id) => (
          <PaginationNumber
            key={page}
            href={createPageURL(page)}
            isActive={currentPage == page}
            page={page}
          />
        ))}
        <PaginationArrow
          href={createPageURL(currentPage + 1)}
          isDisabled={currentPage >= 1}
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
  const classes = isActive
    ? 'dark:bg-indigo-950 w-8 h-8 rounded-md flex border-indigo-600 justify-center items-center border dark:border-indigo-500 bg-indigo-200 text-sm text-indigo-700 dark:text-indigo-400'
    : 'group bg-gray-300 border-gray-500 dark:bg-gray-900 w-8 h-8 flex items-center justify-center rounded-md border dark:border-gray-800 hover:bg-gray-200 hover:border-indigo-500 dark:hover:bg-gray-800 dark:hover:border-indigo-500 active:bg-indigo-200 active:dark:bg-indigo-950 duration-200 text-sm text-gray-500'

  return isActive ? (
    <a className={classes}>{page}</a>
  ) : (
    <a className={classes} href={href}>
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

  const classes = isDisabled
    ? 'dark:bg-gray-900 w-8 h-8 rounded-md flex border-gray-400 justify-center items-center border dark:border-gray-800 bg-gray-300'
    : 'group bg-gray-300 border-gray-500 dark:bg-gray-900 w-8 h-8 flex items-center justify-center rounded-md border dark:border-gray-800 hover:bg-gray-200 hover:border-indigo-500 dark:hover:bg-gray-800 dark:hover:border-indigo-500 active:bg-indigo-200 active:dark:bg-indigo-950 duration-200'

  return isDisabled ? (
    <a className={classes}>{icon}</a>
  ) : (
    <a className={classes} href={href}>
      {icon}
    </a>
  )
}
