'use client'

import Search from '@/components/Search';
import Native from './Native';
import Categories from './Categories';

const Filters = () => {
  
  return (
    <div className="z-20 flex flex-col w-full max-w-full gap-6 items-start">
        <Categories/>
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
        <Search/>
        <Native/>
    </div>
    </div>
    
  )
}

export default Filters