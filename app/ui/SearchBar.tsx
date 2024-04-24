import searchIcon from '@/app/ui/images/search-icon.svg'
import Image from 'next/image'

export default function SearchBar() {
  return (
    <form action='/' method='get' className="border focus-within:border-gray-200 focus-within:outline-gray-200/30 outline outline-4 outline-gray-200/0 border-gray-400 bg-gray-200/5 rounded-full flex w-full max-w-xl duration-200">
      <input
        type="search"
        autoComplete="off"
        className="bg-transparent text-sm flex-1 outline-none font-normal pl-4 pr-2 py-2"
        placeholder="what is the Turbo button on my apple II?"
        name='search'
      />
      <button type='submit' className="bg-gray-200 rounded-r-full w-16 flex justify-center items-center pr-1 hover:bg-gray-300 active:bg-gray-400 duration-200">
        <Image src={searchIcon} alt="" width={18} />
      </button>
    </form>
  )
}
