import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Mobius from '@/components/Mobius'
import '@/styles/globals.css'

export const metadata = {
  title: 'Monad Ecosystem',
  description: 'Monad ecosystem is an informative page where you can find the different applications of the Monad ecosystem',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative bg-[rgb(32,0,82)] text-[#F7EDE8] md:px-16 px-4">
        <Mobius/>
        <Header/>
        <main className="flex mx-auto min-h-screen flex-col w-full max-w-full md:max-w-[1200px]">
        {children}
        </main>
        <Footer/>
        </body>
    </html>
  )
}
