import { cookies } from 'next/headers'
import SearchBar from './SearchBar'
import { verifyJWT } from '../lib/utils'
import React from 'react'
import { CursorText } from '@phosphor-icons/react/dist/ssr'
import TipPopup from './TipPopup'
import ChangeBackgroundController from './ChangeBackgroundController'

interface IHomeBannerProps {
    backgroundPosition?: 'bottom' | 'center' | 'top' | string
}

export function HomeBanner({
    backgroundPosition = 'center',
}: IHomeBannerProps) {
    let isAdmin = false

    const authCookie = cookies().get('auth')

    if (authCookie) {
        isAdmin = verifyJWT(authCookie?.value, '/')
    }

    const bannerUrl =
        'https://images.unsplash.com/photo-1532272037986-b930d0b26075?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    const mantra = 'Welcome my friend!'
    const photographerName = 'Klemen Vrankar'
    const photographerUrl =
        'https://unsplash.com/photos/starry-night-RrSG1hDo8ew'
    const providerName = 'Unsplash'
    const providerUrl = providerName == 'Unsplash' ? 'https://unsplash.com/' : 'https://www.pexels.com/'

    return (
        <div
            style={{
                backgroundImage: `url("${bannerUrl}")`,
                backgroundPosition: backgroundPosition,
            }}
            arial-label="Banner section"
            className={`relative bg-cover flex flex-col w-full h-96 justify-center items-center px-2 md:mt-20 bg-zinc-800`}
        >
            {isAdmin && (
                <ChangeBackgroundController
                    backgroundUrl={bannerUrl}
                    photographerName={photographerName}
                    photographerUrl={photographerUrl}
                    providerName={providerName}
                />
            )}
            <div className="flex-1"></div>
            <div className="flex flex-col justify-between mb-2 items-center flex-1 w-full">
                <h1 className="relative px-2 max-w-[25rem] opacity-80 text-2xl font-light text-center leading-10">
                    {isAdmin && <ChangeMantraButton />}
                    {mantra}
                </h1>

                {/* search bar */}
                <SearchBar />

                <p
                    className="text-sm font-light text-gray-200/50 hover:text-gray-200 duration-200"
                    style={{ textShadow: '0 0 3px #00000077' }}
                >
                    Photo by{' '}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={photographerUrl}
                        className="hover:text-indigo-300 duration-200"
                        aria-label="Image link on the original plataform"
                    >
                        <strong>{photographerName}</strong>
                    </a>{' '}
                    on{' '}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={providerUrl}
                        className="hover:text-indigo-300 duration-200"
                        aria-label="official platform where the image was obtained from"
                    >
                        <strong>{providerName}</strong>
                    </a>
                </p>
            </div>
        </div>
    )
}

const ChangeMantraButton: React.FC = () => {
    return (
        <button className="group absolute bottom-10 left-1/2 -translate-x-1/2 h-10 w-10 border flex items-center justify-center rounded-md border-gray-200 bg-gray-300/10 active:bg-transparent text-gray-200 opacity-50 hover:opacity-100 duration-200">
            <CursorText size={24} />
            <TipPopup
                className="opacity-0 text-gray-200 group-hover:opacity-100 bottom-full text-nowrap mb-2"
                title="Change Mantra"
            />
        </button>
    )
}
