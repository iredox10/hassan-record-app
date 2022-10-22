import { useState,useEffect } from "react"
import axios from 'axios'

const useFectch = (url) =>{

    const [data, setData] = useState([])
    const [err, setErr] = useState()
    useEffect(()=>{
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
    },[url])
    return {data,err}
}

export default useFectch