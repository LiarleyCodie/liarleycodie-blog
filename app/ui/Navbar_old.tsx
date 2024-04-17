'use client'

import burgerMenuIcon from '@/app/ui/images/burger-menu-icon.svg'
import githubLogo from '@/app/ui/images/github-logo 1.svg'
import instagramLogo from '@/app/ui/images/instagram-logo 1.svg'
import xLogo from '@/app/ui/images/x-logo 1.svg'
import lyiarLogo from '@/app/ui/images/liarleycodie-logo.svg'
import closeNavIcon from '@/app/ui/images/close-nav-icon.svg'
import moonIcon from '@/app/ui/images/moon-icon.svg'
import sunIcon from '@/app/ui/images/sun-icon.svg'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

// import '@/app/ui/navbar.css'

export function NavbarOld() {
  const currentPath = usePathname()
  const isUserCurrentlyInIndex = currentPath == '/'

  const [isNavbarVisible, setIsNavbarVisible] = useState(false)
  const { theme, setTheme } = useTheme()
  useEffect(() => {
    const currentTheme = localStorage.getItem('theme')
    if (currentTheme) setTheme(currentTheme)
  }, [])

  function handleToggleTheme() {
    // setTheme('dark')
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <header
      className={`absolute z-10 w-full items-center px-10 grid grid-cols-[auto_2fr] min-h-24 bg-stone-200 dark:bg-stone-900 ${isNavbarVisible && 'h-full'}`}
    >
      <a
        className={`hover:opacity-100 ${isUserCurrentlyInIndex ? 'opacity-100' : 'opacity-50'} invert dark:filter-none w-10 h-10`}
        href="/"
      >
        <Image src={lyiarLogo} alt="" style={{ height: '100%' }} />
      </a>
      <button
        className="left-1/2 top-0 mt-8 -translate-x-1/2 sm:hidden absolute z-30"
        onClick={() => setIsNavbarVisible(!isNavbarVisible)}
      >
        {isNavbarVisible ? (
          <Image
            id="close-icon"
            className="dark:invert"
            src={closeNavIcon}
            alt=""
          />
        ) : (
          <Image className="open-icon" src={burgerMenuIcon} alt="" />
        )}
      </button>

      <nav
        id="nav-menu"
        className={`${isNavbarVisible ? '-translate-x-0' : '-translate-x-full'} sm:-translate-x-0 bg-stone-200 dark:bg-stone-900 text-stone-950 sm:text-stone-200 dark:text-stone-200 sm:bg-transparent py-12 sm:p-0 top-0 left-0 absolute w-full h-full sm:h-auto sm:relative flex-col  flex items-center justify-between sm:flex-row`}
      >
        <ul className="flex-col items-center text-3xl sm:text-sm sm:flex-row flex  sm:flex-auto  justify-center text-center gap-3 sm:gap-0 mt-14 sm:mt-0 text-stone-900 dark:text-stone-200 font-medium">
          <NavItem path="/" currentPath={currentPath}>
            MAIN
          </NavItem>
          <NavItem path="/posts" currentPath={currentPath}>
            POSTS
          </NavItem>
          <NavItem path="/aboutme" currentPath={currentPath}>
            ABOUT ME
          </NavItem>
          <NavItem path="/contactme" currentPath={currentPath}>
            CONTACT ME
          </NavItem>
        </ul>

        <ul className="flex gap-2 sm:flex-none items-center invert dark:filter-none">
          <li>
            <a
              className="opacity-50 hover:opacity-100 h-12 w-12"
              target="_blank"
              href="https://github.com/LiarleyCodie"
            >
              <Image style={{ height: '100%' }} src={githubLogo} alt="" />
            </a>
          </li>
          <li>
            <a
              className="opacity-50 hover:opacity-100 h-12 w-12"
              target="_blank"
              href="https://www.instagram.com/liarleycodie/"
            >
              <Image style={{ height: '100%' }} src={instagramLogo} alt="" />
            </a>
          </li>
          <li>
            <a
              className="opacity-50 hover:opacity-100 h-12 w-12"
              target="_blank"
              href="https://twitter.com/liarleycodie"
            >
              <Image style={{ height: '100%' }} src={xLogo} alt="" />
            </a>
          </li>
        </ul>
        <button
          id="dark-mode-btn"
          className={`flex w-32 h-10 sm:hidden text-sm items-center justify-center hover:bg-stone-800 bg-stone-900 text-stone-200 mb-4 sm:mb-0 border border-stone-950 dark:bg-stone-300 dark:border-stone-200 dark:text-stone-900 dark:hover:bg-stone-400`}
          onClick={handleToggleTheme}
        >
          <span
            id="dark-span"
            className="flex dark:hidden sm:hidden justify-center items-center gap-2"
          >
            Dark Mode
            <Image src={moonIcon} alt="" />
          </span>
          <span
            id="light-span"
            className="hidden dark:flex sm:hidden justify-center items-center gap-2"
          >
            Light Mode
            <Image src={sunIcon} alt="" />
          </span>
        </button>

        <button
          id="dark-mode-btn"
          className={`w-10 ml-3 h-10 hidden sm:flex text-sm items-center justify-center hover:bg-stone-800 bg-stone-900 text-stone-200 mb-4 sm:mb-0 border border-stone-950 dark:bg-stone-300 dark:border-stone-200 dark:text-stone-900 dark:hover:bg-stone-400`}
          onClick={handleToggleTheme}
        >
          <span
            id="dark-span"
            className="flex dark:hidden sm:hidden justify-center items-center gap-2"
          >
            <Image src={moonIcon} alt="" />
          </span>
          <span
            id="light-span"
            className="hidden dark:flex sm:hidden justify-center items-center gap-2"
          >
            <Image src={sunIcon} alt="" />
          </span>
        </button>
      </nav>
    </header>
  )
}

interface INavItemProps {
  path: string
  currentPath: string
  children: React.ReactNode
}
function NavItem({ path, currentPath, children }: INavItemProps) {
  const isActive = currentPath === path

  return (
    <li className="w-full sm:w-auto">
      <a
        className={`block w-full sm:w-auto ${isActive ? 'opacity-100' : 'opacity-50'} hover:opacity-100 px-3 py-2`}
        href={path}
      >
        {children}
      </a>
    </li>
  )
}
