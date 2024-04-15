'use client'

import { filtersUrlQuery } from '@/utils/utils';
import { useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';

const categories = [
    {id: 1, name: 'All', slug: 'All'},
    {id: 2, name: 'DeFi', slug: 'DeFi'},
    {id: 3, name: 'Bridge', slug: 'Bridge'},
    {id: 4, name: 'Wallet/Payments', slug: 'Wallet/Payments'},
{id: 5, name: 'Infrastructure', slug: 'Infrastructure'},
{id: 6, name: 'Marketplace/NFT', slug: 'Marketplace/NFT'},
{id: 7, name: 'Game', slug: 'Game'},
{id: 8, name: 'Other', slug: 'Other'},
]

const Filters = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [active, setActive] = useState('')
    const [native, setNative] = useState(false)

    const handleCategory = (link) => {
let newUrl = ''

if(link.id === 1 || active === link) {
 setActive('')

    newUrl = filtersUrlQuery({
        params: searchParams.toString(),
        key: 'category',
        value: null
                })
} else {
    setActive(link)

        newUrl = filtersUrlQuery({
            params: searchParams.toString(),
            key: 'category',
            value: link.slug,
                    })
    } 

router.push(newUrl, { scroll: false })

    }

    const handleNative = (e) => {
let newUrl = ''

if(e === true) {
   setNative(true)

    newUrl = filtersUrlQuery({
        params: searchParams.toString(),
        key: 'native',
        value: true,
                })
} else {
    setNative(false)

    newUrl = filtersUrlQuery({
        params: searchParams.toString(),
        key: 'native',
        value: null,
                })
    } 

router.push(newUrl, { scroll: false })

    }

  return (
    <div className="z-20 flex flex-col sm:flex-row w-full max-w-full justify-between gap-4">
        <ul className="flex w-full max-w-full gap-2 flex-wrap sm:flex-row z-20">
        {categories.map(link => (
        <button 
        key={link.id}
        onClick={()=> handleCategory(link)}
        className={`${link.id === 1 && !active ? 'active' : ''} whitespace-nowrap rounded-lg py-2 px-3 capitalize bg-[rgb(131_110_249/30%)] backdrop-blur-sm text-sm sm:text-base hover:bg-[#836ef9] hover:text-[#F7EDE8] ${active === link ? 'active' : ''}`}
        >
{link.name}
        </button>
        ))}
    </ul>
<button 
        onClick={()=> handleNative(!native)}
        className={`${native ? 'active' : ''} flex flex-row items-center rounded-lg py-2 px-3 bg-[rgb(131_110_249/30%)] backdrop-blur-sm hover:bg-[#836ef9] hover:text-[#F7EDE8] gap-1`}
        >
 <img className="w-[1rem]" src="https://assets-global.website-files.com/64c26cc84790d118b80c38c9/6529c7409cc925522834f61b_monad-logo-mark-white-rgb.svg"/>
 <span>Native</span>
        </button>
    </div>
    
  )
}

export default Filters