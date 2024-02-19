"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import Dnavbar from "@/components/Dnavbar"
import Sidebar from '@/components/Sidebar'
import { usePathname } from 'next/navigation'
import Footer from '../components/Footer'
import Context from '../Context/Context'
import head from 'next/head'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Online Store',
//   description: 'Trusted Online store and Quickbuy',
// }

export default function RootLayout({ children }) {

  var pathname = usePathname()

  return (

    <html lang="en">
      <head><link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' /></head>
      <body className={inter.className}>
        <Toaster />
        <Context>
          {
            pathname.startsWith("/admin") ?
              // dashboard layout
              <div className=' h-screen'>
                <nav className='bg-gray-100 h-12'><Dnavbar /></nav>



                <div className='flex h-[calc(100vh-48px)]  '>
                  <aside className='w-44 bg-gray-100 '><Sidebar /></aside>

                  <main className='p-3 overflow-hidden flex-1'>
                    <div className='overflow-auto h-full'>
                      {children}
                    </div>

                  </main>
                </div>
              </div>

              :
              //Public layout
              <div className=' '>
                {
                  pathname != "/login" ? <Navbar /> :null
                }
                {children}
                {
                  pathname != "/login" ? <Footer /> :null
                }
              </div>

          }
        </Context>
      </body>
    </html>
  )
}
