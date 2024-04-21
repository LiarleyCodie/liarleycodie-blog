'use client'

import { CaretLeft, CaretRight } from '@phosphor-icons/react'

export default function PaginationControl() {
  return (
    <div className="flex gap-2">
      <button className="group bg-gray-300 border-gray-500 dark:bg-gray-900 w-8 h-8 flex items-center justify-center rounded-md border dark:border-gray-800 hover:bg-gray-200 hover:border-indigo-500 dark:hover:bg-gray-800 dark:hover:border-indigo-500 active:bg-indigo-200 active:dark:bg-indigo-950 duration-200">
        <CaretLeft
          size={18}
          className="group-hover:dark:fill-indigo-400 group-hover:fill-indigo-700 fill-gray-900 dark:fill-gray-300"
        />
      </button>
      <button className="group bg-gray-300 border-gray-500 dark:bg-gray-900 w-8 h-8 flex items-center justify-center rounded-md border dark:border-gray-800 hover:bg-gray-200 hover:border-indigo-500 dark:hover:bg-gray-800 dark:hover:border-indigo-500 active:bg-indigo-200 active:dark:bg-indigo-950 duration-200">
        <CaretRight
          size={18}
          className="group-hover:dark:fill-indigo-400 group-hover:fill-indigo-700 fill-gray-900 dark:fill-gray-300"
        />
      </button>
    </div>
  )
}
