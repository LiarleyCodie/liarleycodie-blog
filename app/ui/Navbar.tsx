'use client'

import lyiarLogo from '@/app/ui/images/liarleycodie-logo.svg'
import {
    Sun,
    MoonStars,
    XLogo,
    InstagramLogo,
    GithubLogo,
    List,
    X,
} from '@phosphor-icons/react'
import Image from 'next/image'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import { SignOut } from '@phosphor-icons/react/dist/ssr'
import { Logout } from '../admin/logout'

export default function Navbar({ isAdmin }: { isAdmin: boolean }) {
    const currentPath = usePathname()

    const [navbarVisibility, setNavbarVisibility] = useState<
        'hidden' | 'visible'
    >('hidden')
    const [isScrolled, setIsScrolled] = useState(false)

    const handleScroll = () => {
        if (window.scrollY > 100) setIsScrolled(true)
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
    }, [setTheme])

    function handleToggleTheme() {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
    }

    return (
        <header className="h-20 fixed z-10 left-0 top-0 w-full">
            <button
                className={`mt-6 md:hidden z-30 absolute left-1/2 top-0 -translate-x-1/2 ${isScrolled && navbarVisibility == 'hidden' ? 'bg-gray-900/20 p-2' : 'p-2'} duration-200`}
                onClick={handleNavbarVisibility}
                aria-label="this button toggles the navbar visibility. This only appears on mobile devices"
            >
                {navbarVisibility == 'visible' ? (
                    <X size={32} className="fill-gray-900 dark:fill-gray-200" />
                ) : (
                    <List size={32} />
                )}
            </button>
            <nav
                className={`${navbarVisibility == 'visible' ? 'translate-x-0' : '-translate-x-full'} z-10 py-14 md:py-0 md:relative absolute w-full ${isScrolled && 'border-b-gray-300 dark:border-b-gray-900'} bg-gray-200 border-b border-transparent dark:bg-gray-950  flex flex-col md:flex-row justify-between items-center h-screen md:h-full px-10 duration-200 md:translate-x-0`}
            >
                <a
                    href="/"
                    className="h-8 dark:filter-none invert order-1 md:order-none"
                    aria-label="this link redirects you to the home page"
                >
                    <Image
                        src={lyiarLogo}
                        alt="Blog creator logo"
                        style={{ height: '100%' }}
                    />
                </a>
                {/* items */}
                <ul className="flex ml-0 md:ml-28 md:flex-row flex-col items-center gap-5 text-center mt-12 md:mt-0">
                    <li className="w-full">
                        <NavItem currentPath={currentPath} path="/">
                            Main
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
                <ul
                    // className="md:flex items-center gap-2 grid grid-cols-[repeat(3,auto)] grid-rows-[repeat(2,auto)]"
                    className="flex flex-wrap gap-2 w-36 md:w-fit items-center justify-center"
                >
                    <li>
                        <a
                            className="opacity-50 duration-200 items-center hover:opacity-100 justify-center flex h-8 w-8"
                            href="https://github.com/LiarleyCodie"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="this link redirects you to the official github profile of the creator of this blog"
                        >
                            <GithubLogo className="fill-gray-900 dark:fill-gray-200 text-4xl md:text-2xl" />
                        </a>
                    </li>
                    <li>
                        <a
                            className="opacity-50 duration-200 mx-4 md:mx-0 items-center hover:opacity-100 justify-center flex h-8 w-8"
                            href="https://www.instagram.com/liarleycodie/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="this links redirects you to the official instagram profile of the creator of this blog"
                        >
                            <InstagramLogo className="fill-gray-900 dark:fill-gray-200 text-4xl md:text-2xl" />
                        </a>
                    </li>
                    <li>
                        <a
                            className="opacity-50 duration-200 items-center hover:opacity-100 justify-center flex h-8 w-8"
                            href="https://twitter.com/liarleycodie"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="this links redirects you to the official x profile of the creator of this blog"
                        >
                            <XLogo className="fill-gray-900 dark:fill-gray-200 text-4xl md:text-2xl" />
                        </a>
                    </li>
                    <button
                        className="bg-gray-300 md:my-0 my-7 gap-2 w-full md:w-10 h-10 active:bg-gray-200 duration-200 cursor-pointer dark:active:bg-gray-950 border-gray-400 dark:bg-gray-900 border hover:text-indigo-600 text-gray-600 dark:hover:text-indigo-300 dark:border-gray-800 text-sm dark:text-gray-400 dark:hover:bg-gray-800 hover:border-indigo-600 dark:hover:border-indigo-500 flex justify-center items-center rounded-md"
                        onClick={handleToggleTheme}
                        aria-label="this button toggles between the light and dark theme"
                    >
                        <span>
                            <span className="flex dark:hidden items-center font-medium gap-1 h-7 px-2">
                                <span className="md:hidden">Dark Mode</span>
                                <MoonStars size={18} />
                            </span>
                            <span className="hidden dark:flex items-center gap-1 h-7 px-2">
                                <span className="md:hidden">Light Mode</span>
                                <Sun size={18} />
                            </span>
                        </span>
                    </button>
                    {isAdmin && <LogOutButton />}
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
            className={`text-nowrap text-gray-900 dark:text-gray-200 px-2 md:text-sm text-4xl justify-center py-2 flex w-full ${currentPath == path ? 'opacity-100' : 'opacity-70'} hover:opacity-100 duration-200`}
            href={path}
            aria-label="this link redirects you to the respective blog page"
        >
            {children}
        </a>
    )
}

function LogOutButton() {
    return (
        <form action={Logout}>
            <button className="bg-gray-300 gap-2 h-10 w-full md:w-fit active:bg-gray-200 duration-200 cursor-pointer dark:active:bg-gray-950 border-gray-400 dark:bg-gray-900 border hover:text-indigo-600 text-gray-600 dark:hover:text-indigo-300 dark:border-gray-800 text-sm dark:text-gray-400 dark:hover:bg-gray-800 hover:border-indigo-600 dark:hover:border-indigo-500 flex justify-center items-center py-2 px-4 rounded-md">
                Log out <SignOut size={20} />
            </button>
        </form>
    )
}
