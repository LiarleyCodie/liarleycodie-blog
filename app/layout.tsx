import { ThemeProvider } from 'next-themes'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Navbar from './ui/Navbar'
import './globals.css'

const poppins = Poppins({ weight: ['500', '400', '200'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LiarleyCodie',
  description:
    'My name is Liarley and here i write blog posts of the relation between the nature of walls and technology',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
