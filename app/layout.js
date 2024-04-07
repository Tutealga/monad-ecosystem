import '@/styles/globals.css'

export const metadata = {
  title: 'Monad | Ecosystem',
  description: 'Monad - Extreme Parallelized Performance for EVM',
  openGraph: {
    images: '/opengraph-image.jpg',
    url: 'https://monad-ecosystem.vercel.app/'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative bg-[rgb(32,0,82)] text-[#F7EDE8] p-16">
      <div className="mobius-floating-div z-10">
        <img className="w-[200%] sm:w-full" src="https://assets-global.website-files.com/647f71a77a2f4691b4fa23a7/647f71a77a2f4691b4fa2422_monad-purple-30-percent%403x-8.png" loading="lazy" data-w-id="2449f98d-1c61-889a-da0a-2ff1fb523866"/>
        </div>
        {children}
        </body>
    </html>
  )
}
