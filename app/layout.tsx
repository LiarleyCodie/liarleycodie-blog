import { ThemeProvider } from 'next-themes'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Navbar from './ui/Navbar'
import { cookies } from 'next/headers'

import './globals.css'
import Footer from './ui/Footer'
import { verifyJWT } from './lib/utils'

const poppins = Poppins({
  weight: ['500', '400', '200', '300'],
  subsets: ['latin'],
})

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
  const authCookie = cookies().get('auth')
  let isAdmin = false

  if (authCookie) {
    isAdmin = verifyJWT(authCookie?.value, '<Navbar />')
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider>
          <Navbar isAdmin={isAdmin} />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
