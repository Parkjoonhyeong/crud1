import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import { NextAuthProvider } from '../components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MongoDB CRUD',
  description: 'Create, Read, Update, Delete in MongoDB',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <div className="max-w-3xl mx-auto p-4">
            <Navbar />
            <div className="mt-8">{children}</div>
          </div>
        </NextAuthProvider>
      </body>
    </html>
  )
}
