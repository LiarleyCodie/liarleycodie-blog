'use client'

import githubLogo from '@/app/ui/images/github-logo.svg'
import instagramLogo from '@/app/ui/images/instagram-logo.svg'
import xwitterLogo from '@/app/ui/images/x-logo.svg'
import moonIcon from '@/app/ui/images/moon-icon.svg'
import lyiarLogo from '@/app/ui/images/liarleycodie-logo.svg'
import burgerMenuIcon from '@/app/ui/images/burger-menu-icon.svg'
import closeNavIcon from '@/app/ui/images/close-nav-icon.svg'
import sunIcon from '@/app/ui/images/sun-icon.svg'
import Image from 'next/image'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const currentPath = usePathname()

  const [navbarVisibility, setNavbarVisibility] = useState<
    'hidden' | 'visible'
  >('hidden')
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 50) setIsScrolled(true)
    else setIsScrolled(false)
  }

  function handleNavbarVisibility() {
    if (navbarVisibility == 'visible') setNavbarVisibility('hidden')
    else setNavbarVisibility('visible')
  }

  const { theme, setTheme } = useTheme()
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    const currentTheme = localStorage.getItem('theme')
    if (currentTheme) setTheme(currentTheme)

      return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function handleToggleTheme() {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <header className="h-20 fixed z-10 left-0 top-0 w-full">
      <button
        className="mt-6 sm:hidden z-30 absolute left-1/2 top-0 -translate-x-1/2"
        onClick={handleNavbarVisibility}
      >
        {navbarVisibility == 'visible' ? (
          <Image src={closeNavIcon} alt="" className="dark:invert" />
        ) : (
          <Image src={burgerMenuIcon} alt="" />
        )}
      </button>
      <nav
        className={`${navbarVisibility == 'visible' ? 'translate-x-0' : '-translate-x-full'} z-10 py-14 sm:py-0 sm:relative absolute w-full bg-stone-200 dark:bg-stone-900  flex flex-col sm:flex-row justify-between items-center h-screen sm:h-full px-10 duration-300 sm:translate-x-0`}
      >
        <a href="/" className="h-8 dark:filter-none invert">
          <Image src={lyiarLogo} alt="" style={{ height: '100%' }} />
        </a>
        {/* items */}
        <ul className="flex sm:flex-row flex-col items-center gap-2 text-center">
          <li className="w-full">
            <NavItem currentPath={currentPath} path="/">
              Main
            </NavItem>
          </li>
          <li className="w-full">
            <NavItem currentPath={currentPath} path="/posts">
              Posts
            </NavItem>
          </li>
          <li className="w-full">
            <NavItem currentPath={currentPath} path="/aboutme">
              About me
            </NavItem>
          </li>
          <li className="w-full">
            <NavItem currentPath={currentPath} path="/contactme">
              Contact me
            </NavItem>
          </li>
        </ul>
        {/* socials */}
        <ul className="sm:flex items-center gap-2 grid grid-cols-[repeat(3,auto)] grid-rows-[repeat(2,auto)]">
          <li>
            <a
              className="opacity-50 hover:opacity-100 justify-center flex h-8 w-8"
              href="#"
            >
              <Image
                className="dark:filter-none invert"
                src={githubLogo}
                width={20}
                alt=""
              />
            </a>
          </li>
          <li>
            <a
              className="opacity-50 hover:opacity-100 justify-center flex h-8 w-8"
              href="#"
            >
              <Image
                className="dark:filter-none invert"
                src={instagramLogo}
                width={20}
                alt=""
              />
            </a>
          </li>
          <li>
            <a
              className="opacity-50 hover:opacity-100 justify-center flex h-8 w-8"
              href="#"
            >
              <Image
                className="dark:filter-none invert"
                src={xwitterLogo}
                width={20}
                alt=""
              />
            </a>
          </li>
          <button
            className="col-span-3 flex h-9 items-center mt-8 sm:mt-0 bg-stone-800 border-stone-900 dark:bg-stone-300 border dark:border-stone-100 text-sm"
            onClick={handleToggleTheme}
          >
            <span>
              <span className="flex dark:hidden items-center font-medium gap-1  h-7 px-2">
                <span className="sm:hidden">Dark Mode</span>
                <Image src={moonIcon} alt="" width={18} />
              </span>
              <span className="hidden dark:flex items-center gap-1 h-7 px-2">
                <span className="sm:hidden text-stone-900">Light Mode</span>
                <Image src={sunIcon} alt="" width={18} />
              </span>
            </span>
          </button>
        </ul>
      </nav>
    </header>
  )
}

interface INavItemProps {
  children: React.ReactNode
  path: string
  currentPath: string
}
function NavItem({ path, currentPath, children }: INavItemProps) {
  return (
    <a
      className={`text-nowrap text-stone-900 dark:text-stone-200 px-2 sm:text-sm text-4xl justify-center py-2 flex w-full ${currentPath == path ? 'opacity-100' : 'opacity-50'} hover:opacity-100`}
      href={path}
    >
      {children}
    </a>
  )
}
