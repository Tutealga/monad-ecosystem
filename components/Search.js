'use client'

import { filtersUrlQuery } from '@/utils/UrlQuery';
import { useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';

const Search = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [search, setSearch] = useState('')
  
  const handleSearch = (e) => {
    setSearch(e.target.value)
    let newUrl = ''

        newUrl = filtersUrlQuery({
            params: searchParams.toString(),
            key: 'search',
            value: e.target.value
                    })
    
    router.push(newUrl, { scroll: false })

        }

  return (
    <div className="z-20 rounded-lg py-1 px-3 bg-[rgb(131_110_249/30%)] backdrop-blur-sm flex flex-row items-center gap-2 focus:border-red-500 border-1 mr-auto">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-[1rem]" fill="#ffffff" viewBox="0 0 13.696 13.698"><path d="M13.51,11.843,10.843,9.176a.642.642,0,0,0-.455-.187H9.952a5.562,5.562,0,1,0-.963.963v.436a.642.642,0,0,0,.187.455l2.667,2.667a.639.639,0,0,0,.907,0l.757-.757A.645.645,0,0,0,13.51,11.843ZM5.564,8.989A3.424,3.424,0,1,1,8.989,5.564,3.422,3.422,0,0,1,5.564,8.989Z" transform="translate(0 0)"></path></svg>
    <input type="search" placeholder="Search" className="bg-transparent p-1 border-none w-full focus:outline-none" value={search} onChange={handleSearch}/>
        </div>
  )
}

export default Search