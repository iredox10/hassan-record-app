import { useEffect } from "react"

const usePost = (data,url) =>{
    
    useEffect(()=>{
        const post = async () =>{
            try{
                const res = await axios.post(url,{...data})
            }catch(err){
                console.log(err)
            }
        }
    },[])
}