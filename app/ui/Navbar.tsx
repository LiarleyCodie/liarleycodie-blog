'use client'

import githubLogo from '@/app/ui/images/github-logo 1.svg'
import moonIcon from '@/app/ui/images/moon-icon.svg'
import burgerMenuIcon from '@/app/ui/images/burger-menu-icon.svg'
import closeNavIcon from '@/app/ui/images/close-nav-icon.svg'
import sunIcon from '@/app/ui/images/sun-icon.svg'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

export default function Navbar() {
  const [navbarVisibility, setNavbarVisibility] = useState<
    'hidden' | 'visible'
  >('hidden')

  function handleNavbarVisibility() {
    if (navbarVisibility == 'visible') setNavbarVisibility('hidden')
    else setNavbarVisibility('visible')
  }

  const { theme, setTheme } = useTheme()
  useEffect(() => {
    const currentTheme = localStorage.getItem('theme')
    if (currentTheme) setTheme(currentTheme)
  }, [])

  function handleToggleTheme() {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <header className="h-20 absolute left-0 top-0 w-full bg-black">
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
      <nav className="z-10 py-14 sm:py-0 sm:relative absolute w-full bg-stone-200 dark:bg-stone-900 flex flex-col sm:flex-row justify-between items-center h-screen sm:h-full px-10">
        <a href="/">LOGO</a>
        {/* items */}
        <ul className="flex sm:flex-row flex-col gap-2 text-center">
          <li className="w-full">
            <NavItem path="/">Main</NavItem>
          </li>
          <li className="w-full">
            <NavItem path="/">Posts</NavItem>
          </li>
          <li className="w-full">
            <NavItem path="/">About me</NavItem>
          </li>
          <li className="w-full">
            <NavItem path="/">Contact me</NavItem>
          </li>
        </ul>
        {/* socials */}
        <ul className="sm:flex gap-2 grid grid-cols-[repeat(3,auto)] grid-rows-[repeat(2,auto)]">
          <li>
            <a className="bg-red-500/20 justify-center flex h-8 w-8" href="#">
              <Image src={githubLogo} width={26} alt="" />
            </a>
          </li>
          <li>
            <a className="bg-red-500/20 justify-center flex h-8 w-8" href="#">
              <Image src={githubLogo} width={26} alt="" />
            </a>
          </li>
          <li>
            <a className="bg-red-500/20 justify-center flex h-8 w-8" href="#">
              <Image src={githubLogo} width={26} alt="" />
            </a>
          </li>
          <button
            className="col-span-3 flex bg-red-500/20 h-8 items-center"
            onClick={handleToggleTheme}
          >
            <span>
              <span className="flex dark:hidden items-center gap-1  h-7 px-2">
                <span className="sm:hidden">Dark Mode</span>
                <Image src={moonIcon} alt="" width={18} />
              </span>
              <span className="hidden dark:flex items-center gap-1 h-7 px-2">
                <span className="sm:hidden">Light Mode</span>
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
}
function NavItem({ path, children }: INavItemProps) {
  return (
    <a
      className="bg-red-500/20 px-2 sm:text-base text-4xl justify-center py-2 flex w-full"
      href={path}
    >
      {children}
    </a>
  )
}
