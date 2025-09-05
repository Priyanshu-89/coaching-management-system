import { useEffect, useState } from "react";

export function UseDebounce(value, delay){
    const [debouncedValue, setdebouncedValue] = useState(value)

    useEffect(()=>{
        const timer=setTimeout(()=>{
            setdebouncedValue(value)
        }, delay || 500)

        return ()=>{
            clearTimeout(timer)
        }
    }, [value, delay])

    return debouncedValue
}