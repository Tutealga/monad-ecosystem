import { useState } from 'react';
import { filtersUrlQuery } from '@/utils/UrlQuery';
import { useSearchParams, useRouter } from 'next/navigation';

const Native = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [native, setNative] = useState(false)

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
    <button onClick={()=> handleNative(!native)} 
        className={`${native ? 'active' : ''} flex flex-row items-center hover:bg-[#836ef9] rounded-lg py-2 px-3 bg-[rgb(131_110_249/30%)] gap-1 backdrop-blur-sm`}
        >
 <img src="https://assets-global.website-files.com/64c26cc84790d118b80c38c9/6529c7409cc925522834f61b_monad-logo-mark-white-rgb.svg" className="w-4 h-4"/>
 <span>Native</span>
        </button>
  )
}

export default Native