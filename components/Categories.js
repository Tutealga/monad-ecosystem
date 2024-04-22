import { filtersUrlQuery } from '@/utils/UrlQuery';
import { useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { categories } from '@/utils/const';

const Categories = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [active, setActive] = useState('')

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

  return (
    <ul className="flex w-full gap-2 flex-row justify-start items-center overflow-x-scroll md:overflow-x-hidden md:flex-wrap no-scrollbar">
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
  )
}

export default Categories