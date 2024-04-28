'use client'

import { Check, Image as ImageIcon, X } from '@phosphor-icons/react/dist/ssr'
import TipPopup from './TipPopup'
import React, { useState } from 'react'
import clsx from 'clsx'
import Image from 'next/image'

interface IBackgroundControllerProps {
    backgroundUrl: string
    photographerName: string
    photographerUrl: string
    providerName: 'Unsplash' | 'Pexels'
}

const ChangeBackgroundButton: React.FC<{
    onClick: () => void
}> = ({ onClick }) => {
    return (
        <button
            className="group absolute top-20 md:top-0 right-0 m-4 h-10 w-10 border flex items-center justify-center rounded-md bg-gray-300/10 active:bg-transparent border-gray-200 text-gray-300 opacity-50 hover:opacity-100 duration-200"
            onClick={onClick}
        >
            <ImageIcon size={24} />
            <TipPopup
                className="opacity-0 group-hover:opacity-100 right-full text-nowrap mr-3"
                title="Change Background"
            />
        </button>
    )
}

const ChangeBackgroundModal: React.FC<IBackgroundControllerProps> = ({
    backgroundUrl = '',
    photographerName,
    photographerUrl,
    // providerName,
}) => {
    const [backgroundUrlInput, setBackgroundUrlInput] =
        useState<string>(backgroundUrl)
    const [photographerNameInput, setPhotographerNameInput] =
        useState<string>(photographerName)
    const [photographerUrlInput, setPhotographerUrlInput] =
        useState<string>(photographerUrl)
    // const [providerName]

    return (
        <dialog
            className="fixed flex flex-col  inset-0 m-auto z-50 px-3 py-3 rounded-md dark:bg-gray-950 dark:border-gray-900 bg-gray-200 border border-gray-300 w-full max-w-3xl overflow-y-scroll h-[40rem]"
            open
        >
            <div className="relative flex min-h-72 w-full bg-gray-300 dark:bg-gray-900 items-center justify-center">
                <Image src={backgroundUrl} alt="" fill />
                <div className="absolute h-72 w-full bg-red-500/10"></div>
            </div>
            <div className="flex flex-col gap-2 my-4">
                <div>
                    <label
                        htmlFor="backgroundUrl"
                        className="pointer-events-none select-none text-sm block mb-1 text-gray-700 ml-2 dark:text-gray-500"
                    >
                        Background URL{' '}
                        <span className="text-xs">
                            &#40;you can only use images from{' '}
                            <strong>Unsplash</strong> or <strong>Pexels</strong>
                            &#41;
                        </span>
                    </label>
                    <input
                        type="text"
                        id="backgroundUrl"
                        className="outline focus-within:bg-gray-200 outline-4 outline-transparent dark:focus-within:bg-gray-950 focus-within:outline-indigo-500/20 duration-200 focus-within:border-indigo-500 dark:bg-gray-900 bg-gray-300 text-sm text-gray-800 dark:text-gray-300 dark:placeholder:text-gray-600 placeholder:text-gray-500 py-2 px-4 w-full border border-gray-400 dark:border-gray-800 rounded-md"
                        value={backgroundUrlInput}
                    />
                </div>
                <div>
                    <label
                        htmlFor="photographerName"
                        className="pointer-events-none select-none text-sm block mb-1 text-gray-700 ml-2 dark:text-gray-500"
                    >
                        Photographer name
                    </label>
                    <input
                        type="text"
                        id="photographerName"
                        className="outline focus-within:bg-gray-200 outline-4 outline-transparent dark:focus-within:bg-gray-950 focus-within:outline-indigo-500/20 duration-200 focus-within:border-indigo-500 dark:bg-gray-900 bg-gray-300 text-sm text-gray-800 dark:text-gray-300 dark:placeholder:text-gray-600 placeholder:text-gray-500 py-2 px-4 w-full border border-gray-400 dark:border-gray-800 rounded-md"
                        value={photographerNameInput}
                    />
                </div>
                <div>
                    <label
                        htmlFor="photographerUrl"
                        className="pointer-events-none select-none text-sm block mb-1 text-gray-700 ml-2 dark:text-gray-500"
                    >
                        Photographer URL
                    </label>
                    <input
                        type="text"
                        id="photographerUrl"
                        className="outline focus-within:bg-gray-200 outline-4 outline-transparent dark:focus-within:bg-gray-950 focus-within:outline-indigo-500/20 duration-200 focus-within:border-indigo-500 dark:bg-gray-900 bg-gray-300 text-sm text-gray-800 dark:text-gray-300 dark:placeholder:text-gray-600 placeholder:text-gray-500 py-2 px-4 w-full border border-gray-400 dark:border-gray-800 rounded-md"
                        value={photographerUrlInput}
                    />
                </div>
                <div>
                    <label
                        htmlFor="providersName"
                        className="pointer-events-none select-none text-sm block mb-1 text-gray-700 ml-2 dark:text-gray-500"
                    >
                        Provider name
                    </label>
                    <select
                        className="outline focus-within:bg-gray-200 outline-4 outline-transparent dark:focus-within:bg-gray-950 focus-within:outline-indigo-500/20 duration-200 focus-within:border-indigo-500 dark:bg-gray-900 bg-gray-300 text-sm text-gray-800 dark:text-gray-300 dark:placeholder:text-gray-600 placeholder:text-gray-500 py-2 px-4 w-full border border-gray-400 dark:border-gray-800 rounded-md"
                        name="providers"
                        id="providersName"
                    >
                        <option value="unsplash" selected>
                            Unsplash
                        </option>
                        <option value="pexels">Pexels</option>
                    </select>
                </div>
            </div>

            <div className="flex gap-2 justify-center">
                <button className="bg-gray-300 gap-2 w-36 h-10 active:bg-gray-200 duration-200 cursor-pointer dark:active:bg-gray-950 border-gray-400 dark:bg-gray-900 border hover:text-emerald-600 text-gray-700 dark:hover:text-emerald-300 dark:border-gray-800 text-sm dark:text-gray-400 dark:hover:bg-gray-800 hover:border-emerald-600 dark:hover:border-emerald-500 flex justify-center items-center rounded-md">
                    <Check size={22} /> Change
                </button>
                <button className="bg-gray-300 gap-2 w-36 h-10 active:bg-gray-200 duration-200 cursor-pointer dark:active:bg-gray-950 border-gray-400 dark:bg-gray-900 border hover:text-rose-600 text-gray-700 dark:hover:text-rose-300 dark:border-gray-800 text-sm dark:text-gray-400 dark:hover:bg-gray-800 hover:border-rose-600 dark:hover:border-rose-500 flex justify-center items-center rounded-md">
                    <X size={22} /> Cancel
                </button>
            </div>
        </dialog>
    )
}

const ChangeBackgroundController: React.FC<IBackgroundControllerProps> = ({
    backgroundUrl,
    photographerName,
    photographerUrl,
    providerName,
}) => {
    const [isModalVisible, setIsModalVisible] = useState(false)

    const handleOpenChangeBackgroundModal = () => {
        setIsModalVisible(true)
        // document.body.style.overflow = 'hidden'
    }

    return (
        <>
            <div
                className={clsx(
                    'flex fixed w-full h-full top-0 left-0 duration-200',
                    isModalVisible ? 'bg-gray-950/60 z-50' : 'bg-transparent',
                )}
            ></div>
            <ChangeBackgroundButton onClick={handleOpenChangeBackgroundModal} />
            <ChangeBackgroundModal
                backgroundUrl={backgroundUrl}
                photographerName={photographerName}
                photographerUrl={photographerUrl}
                providerName={providerName}
            />
        </>
    )
}

export default ChangeBackgroundController
