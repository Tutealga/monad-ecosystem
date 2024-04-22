import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Mobius from '@/components/Mobius'
import '@/styles/globals.css'

export const metadata = {
  title: 'Monad | Ecosystem',
  description: 'Monad - Extreme Parallelized Performance for EVM',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative bg-[rgb(32,0,82)] text-[#F7EDE8] px-16">
        <Mobius/>
        <Header/>
        <main className="flex mx-auto min-h-screen flex-col w-full max-w-[1200px]">
        {children}
        </main>
        <Footer/>
        </body>
    </html>
  )
}
