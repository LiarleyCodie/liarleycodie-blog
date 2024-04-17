import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from './ui/Navbar'

const poppins = Poppins({ weight: ['500', '400', '200'], subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'LiarleyCodie',
    description:
        'My name is LiarleyCodie and here i write blog posts of the relation between the nature of walls and technology',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body className={poppins.className}>
                <Navbar />
                {children}
                </body>
        </html>
    )
}
