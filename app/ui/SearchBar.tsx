'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { MagnifyingGlass } from '@phosphor-icons/react'

export default function SearchBar() {
  const searchParams = useSearchParams()

  const term = searchParams.get('search')

  const [searchInput, setSearchInput] = useState<string>(term ?? '')

  return (
    <form
      action="/"
      method="get"
      className="border focus-within:bg-transparent focus-within:border-gray-200 focus-within:outline-gray-200/20 outline outline-4 outline-gray-200/0 border-gray-400 bg-gray-200/5 rounded-full flex w-full max-w-xl duration-200"
    >
      <input
        type="search"
        autoComplete="off"
        className="bg-transparent text-sm flex-1 outline-none font-normal pl-4 pr-2 py-2"
        placeholder="what is the Turbo button on my apple II?"
        name="search"
        value={searchInput}
        onChange={e => setSearchInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-gray-200 rounded-r-full w-16 flex justify-center items-center pr-1 hover:bg-gray-300 active:bg-gray-400 duration-200"
      >
        {/* <Image src={searchIcon} alt="search_icon" width={18} /> */}
        <MagnifyingGlass size={18} className='fill-gray-900' />
      </button>
    </form>
  )
}
