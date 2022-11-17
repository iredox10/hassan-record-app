import { useState,useEffect } from "react"
import axios from 'axios'

const useFetch = (url) =>{

    const [data, setData] = useState()
    const [err, setErr] = useState()
    useEffect(()=>{
        const fetch = async () =>{
            try{
                const res = await axios(url)
                setData(res.data)
                // console.log(res.data)
            }catch(err){
                setErr(err)
                console.log(err)
            }
        }
        fetch()
    },[url,data])
    return {data,err}
}

export default useFetch