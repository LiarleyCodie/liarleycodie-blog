'use client'

import burgerMenuIcon from '@/app/ui/images/burger-menu-icon.svg'
import githubLogo from '@/app/ui/images/github-logo 1.svg'
import instagramLogo from '@/app/ui/images/instagram-logo 1.svg'
import xLogo from '@/app/ui/images/x-logo 1.svg'
import lyiarGreenLogo from '@/app/ui/images/liarleycodie-green-logo.svg'
import closeNavIcon from '@/app/ui/images/close-nav-icon.svg'
import moonIcon from '@/app/ui/images/moon-icon.svg'

import Image from 'next/image'
import { usePathname } from 'next/navigation'

import '@/app/ui/navbar.css'

export default function Navbar() {
  const pathname = usePathname()
  const isUserCurrentlyInIndex = pathname == '/'

  return (
    <header className="absolute z-10 bg-red-500 w-full h-full sm:h-auto items-center px-20 grid grid-cols-[auto_2fr] sm:min-h-44">
      <a
        className={`hover:opacity-100 ${isUserCurrentlyInIndex ? 'opacity-100' : 'opacity-50'}`}
        href="#"
      >
        <Image src={lyiarGreenLogo} alt="" />
      </a>
      <input id="side-menu-button" type="checkbox" className="hidden" />
      <label
        htmlFor="side-menu-button"
        id="navbar-label"
        className="left-1/2 top-0 mt-8 -translate-x-1/2 sm:hidden absolute z-30"
      >
        <Image className="open-icon" src={burgerMenuIcon} alt="" />
        <Image id="close-icon" className="hidden" src={closeNavIcon} alt="" />
      </label>

      <nav
        id="nav-menu"
        className="-translate-x-full bg-stone-200 text-stone-950 sm:text-stone-200 sm:bg-transparent py-12 sm:p-0 top-0 left-0 absolute w-full h-full sm:h-auto sm:relative flex-col  flex items-center justify-between sm:flex-row"
      >
        <ul className="flex-col items-center text-3xl sm:text-base sm:flex-row flex  sm:flex-auto  justify-center text-center gap-3 sm:gap-0 mt-14 sm:mt-0">
          <li className="w-full sm:w-auto">
            <a
              className={`block w-full sm:w-auto  hover:opacity-100 px-3 py-2 ${isUserCurrentlyInIndex ? 'opacity-100' : 'opacity-50'}`}
              href="#"
            >
              MAIN
            </a>
          </li>
          <li className="w-full sm:w-auto">
            <a
              className="block w-full sm:w-auto opacity-50 hover:opacity-100 px-3 py-2"
              href="#"
            >
              POSTS
            </a>
          </li>
          <li className="w-full sm:w-auto">
            <a
              className="block w-full sm:w-auto opacity-50 hover:opacity-100 px-3 py-2"
              href="#"
            >
              ABOUT ME
            </a>
          </li>
          <li className="w-full sm:w-auto">
            <a
              className="block w-full sm:w-auto opacity-50 hover:opacity-100 px-3 py-2"
              href="#"
            >
              CONTACT ME
            </a>
          </li>
        </ul>

        <ul className="flex gap-2 sm:flex-none items-center sm:filter-none invert">
          <li>
            <a className="opacity-50 hover:opacity-100 h-12 w-12" href="#">
              <Image src={githubLogo} alt="" />
            </a>
          </li>
          <li>
            <a className="opacity-50 hover:opacity-100 h-12 w-12" href="#">
              <Image src={instagramLogo} alt="" />
            </a>
          </li>
          <li>
            <a className="opacity-50 hover:opacity-100 h-12 w-12" href="#">
              <Image src={xLogo} alt="" />
            </a>
          </li>
        </ul>
        <button className="flex h-10 w-32 sm:hidden text-sm items-center justify-center hover:bg-stone-800 bg-stone-950 text-stone-200 mb-4 sm:mb-0 border border-stone-500">
          <span className="flex sm:hidden justify-center items-center gap-2">
            Dark Mode <Image src={moonIcon} alt="" />
          </span>
        </button>
      </nav>
    </header>
  )
}
