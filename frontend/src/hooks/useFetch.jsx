import { useState,useEffect } from "react"
import axios from 'axios'
import { useCallback } from "react"

const useFetch = (url) =>{
    const [data, setData] = useState()
    const [err, setErr] = useState()
    
    const fn = useCallback(()=>{
        const fetch = async () =>{
            try{
                const res = await axios(url)
                setData(res.data)
                console.log(res.data)
            }catch(err){
                setErr(err)
                console.log(err)
            }
        }
        fetch()
    })

    useEffect(()=>{
        fn()
        // return () => fn()
    },[url])
    return {data,err}
}

export default useFetch