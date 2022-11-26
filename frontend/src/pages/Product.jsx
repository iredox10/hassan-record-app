import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Header from "../components/Header"
import PTag from "../components/PTag"
import useFectch from "../hooks/useFetch"
import {useQuery} from 'react-query';

	// Fetcher function
  
  export default function Product() {
  const {id} = useParams()
	const getFacts = async () => {
		const res = await fetch('http://localhost:4000/view-product/'+id);
		return res.json();
	};
	// Using the hook
	const {data, err,} = useQuery('products', getFacts,{refetchInterval: 1000});
    // const {data,err} = useFectch('http://localhost:4000/view-product/'+id)
    const navigate = useNavigate()
    const [model, setModel] = useState(false)

    const showModel = () =>{
      setModel(true)
    }
    const removeModel = () =>{
      setModel(false)
    }

    const handleDelete = async ()=>{
      try {
        const res = await axios.delete('http://localhost:4000/delete-product/'+id)
        navigate('/products')
        setModel(false)
      } catch (error) {
        console.log(error)
      }
    }
  return (
    <>
    <Header />
    <div className="p-5 shadow">
      <div>
        {err}
      </div>
      {data &&
      <div key={data.id}>
      <PTag span='product name' text={data.productName} />
      <PTag span='product name' text={data.quantity} />
      <PTag span='product name' text={data.pieces} />
      <PTag span='product name' text={data.createdAt} />
      <div className="flex items-center gap-2">
      <button className="p-4 mt-2 bg-red-600 capitalize md:text-2xl font-semibold text-white" onClick={showModel}>delete</button>
      <button className="p-4 mt-2 bg-gray-600 capitalize md:text-2xl font-semibold text-white">edit</button>
      </div>
      </div>
    }
    {model && 
    <div className="absolute opacity-.5 top-10 w-full h-full bg-black wid">
      <div className=" p-10 capitalize left-4 bg-gray-400 w-[50%]">
        <p className="text-center text-2xl font-bold">are you sure you want to delete this</p>
        <div className="flex gap-2">
        <button className="w-full p-4 mt-2 bg-gray-600 capitalize md:text-2xl font-semibold text-white" onClick={removeModel}>no</button>
        <button className="w-full p-4 mt-2 bg-red-600 capitalize md:text-2xl font-semibold text-white" onClick={handleDelete}>yes</button>
        </div>
      </div>
      </div>
    }
    </div>
    </>
  )
}
