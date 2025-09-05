import { Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Input } from './ui/input'
import { UseDebounce } from '@/app/hooks/use-debounce'
import { usePathname, useRouter } from 'next/navigation'
import qs from 'query-string'
const SearchInput = () => {
  const [value, setvalue] = useState("")
  const debouncevalue=UseDebounce(value, 500)

  const searchParams=new URLSearchParams();
  const router=useRouter();
  const pathname=usePathname();

  const currentCategoryId=searchParams.get("categoryId")

  useEffect(()=>{
const url=qs.stringifyUrl({
  url:pathname,
  query:{
    title:debouncevalue,
    categoryId:currentCategoryId
  }
}, {skipNull:true, skipEmptyString:true})

router.push(url)
  }, [debouncevalue, currentCategoryId, router, pathname])
  return (
    <div className='relative'>
      <Search className='h-4 w-4 top-3 absolute left-3 text-slate-600 dark:text-slate-200'/>
      <Input
      onChange={(e)=>setvalue(e.target.value)}
      value={value}
       className="w-full md:w-[300px] pl-19 rounded-full bg-slate-100 dark:bg-slate-800 focus-visible:ring-slate-200"
      placeholder="Search Courses"
      />
    </div>
  )
}

export default SearchInput
