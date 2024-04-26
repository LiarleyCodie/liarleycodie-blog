'use client'

import { Skull, X } from '@phosphor-icons/react/dist/ssr'
import { useState, useRef, useEffect } from 'react'
import clsx from 'clsx'

export default function Notification() {
    const [isNotificationVisible, setIsNotificationVisible] = useState(false)
    const notificationRef = useRef(null)
    let timeoutId = 0

    const handleHideNotification = () => {
        setIsNotificationVisible(false)
        window.clearTimeout(timeoutId)
    }

    useEffect(() => {
        setIsNotificationVisible(true)
        timeoutId = window.setTimeout(() => {
            setIsNotificationVisible(false)
            
        }, 2000)

        return () => window.clearTimeout(timeoutId)
    }, [])
    return (
        <button
            ref={notificationRef}
            className={clsx(
                'fixed flex-col items-center justify-center gap-3 flex z-50 top-20 m-4 dark:bg-gray-900 pr-4 pl-4 border bg-gray-300 border-gray-400 dark:border-gray-700 py-3 cursor-pointer rounded-md  duration-200 text-gray-800 dark:text-gray-400 select-none',
                isNotificationVisible
                    ? 'opacity-80 hover:opacity-100 visible'
                    : 'opacity-0 invisible',
            )}
            onClick={handleHideNotification}
        >
            <span className="relative before:absolute before:w-3/5 before:h-[1px] before:bg-gray-400 before:dark:bg-gray-600 before:bottom-[-0.42rem] flex items-center justify-center gap-3">
                <Skull size={32} />
                404 - Page not found
            </span>
            <span className="flex gap-2 items-center justify-center text-xs text-gray-600 dark:text-gray-500">
                Click to close immediately <X size={16} />
            </span>
        </button>
    )
}
