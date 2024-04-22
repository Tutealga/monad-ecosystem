'use client'

import { usePathname } from "next/navigation"

const links = [{id:1, slug:'/', text:'Ecosystem'},{id:2, slug:'/communities', text: 'Local Community'}]

const Header = () => {
  const router = usePathname()

  return (
  <header className="w-full max-w-[1200px] mx-auto items-center justify-center flex py-[15px] px-[30px] mb-8">
    <div className="flex flex-row gap-4 items-center z-20 py-[16px] sm:text-base text-sm font-bold">
        {links.map(link => <a key={link.id} className={`${router === link.slug ? 'border-[#836ef9] border-b-2' : ''} px-3 py-2`} href={link.slug} onClick={() => setActive(link.id)}>{link.text}</a>)}
        <a target="__blank" className="bg-[#836ef9] px-3 py-2 rounded-lg" href="https://discord.com/invite/monad">Official Community</a>
    </div>
  </header>
  )
}

export default Header