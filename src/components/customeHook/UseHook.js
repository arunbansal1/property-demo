import { useState, useEffect } from 'react';
export default function useHook(initializer){
    const [counter,SetCounter] = useState(initializer)
    function resetCounter(){
        SetCounter(counter + 1)
    }
    useEffect(()=>{
        console.log("The Button of the "
        + counter + " times.");
    },[counter])
    return [counter,resetCounter]
}