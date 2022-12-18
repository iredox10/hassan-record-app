import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Header from "../components/Header"
import PTag from "../components/PTag"
import useFectch from "../hooks/useFetch"
import {useQuery} from 'react-query';
import Input from "../components/Input"
import Button from "../components/Button"

	// Fetcher function
  
  export default function Product() {
  const {id} = useParams()
	const getFacts = async () => {
		const res = await fetch('http://localhost:4000/view-product/'+id);
		return res.json();
	};
	// Using the hook
	const {data, err,} = useQuery('products', getFacts);
    // const {data,err} = useFectch('http://localhost:4000/view-product/'+id)
    const navigate = useNavigate()
    const [showModel, setShowModel] = useState(false)
    const [showForm, setShowForm] = useState(false)
    const [productName, setProductName] = useState(data && data.productName)
    const [quantity, setQuantity] = useState(data && data.quantity)
    const [pieces, setPieces] = useState(data && data.pieces)
    const [amount, setAmount] = useState(data && data.amount)
    
    const handleEdit = async () =>{
      try{
          const res = await axios.patch('http://localhost:4000/edit-product/'+id)
          setShowForm(false)
      }catch(err){
        console.log(err)
      }
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
      <PTag span='quantity' text={data.quantity} />
      <PTag span='pieces remaining' text={data.pieces} />
      <PTag span='amount' text={data.amount}/>
      <PTag span='date added' text={data.createdAt} />
      <div className="flex items-center gap-2">
      <button className="p-4 mt-2 bg-red-600 capitalize md:text-2xl font-semibold text-white" onClick={() => setShowModel(true)}>delete</button>
      <button className="p-4 mt-2 bg-gray-600 capitalize md:text-2xl font-semibold text-white" onClick={()=>setShowForm(true)}>edit</button>
      </div>
      </div>
    }
    {showModel && 
    <div className="absolute opacity-.5 top-10 w-full h-full bg-black wid">
      <div className=" p-10 capitalize left-4 bg-gray-400 w-[50%]">
        <p className="text-center text-2xl font-bold">are you sure you want to delete this</p>
        <div className="flex gap-2">
        <button className="w-full p-4 mt-2 bg-gray-600 capitalize md:text-2xl font-semibold text-white" onClick={() => setShowModel(false)}>no</button>
        <button className="w-full p-4 mt-2 bg-red-600 capitalize md:text-2xl font-semibold text-white" onClick={handleDelete}>yes</button>
        </div>
      </div>
      </div>
    }

      {showForm && 
        <div className="absolute  top-10 left-96 w-[40%] h-[80%] bg-green-300 opacity-90 shadow-lg p-10 capitalize">
          <div className="flex justify-between">
          <h1>edit this product : {productName}</h1>
          <button className="capitalize text-red-600 font-bold" onClick={() => setShowForm(false)}>close</button>
          </div>
          <form>
          <Input
              label="productName"
              labelText={"productName"}
              type="text"
              name="productName"
              id="productName"
              placeholder=""
              value={productName}
              state={(e) => setProductName(e.target.value)}
            />
            <Input
              label="quantity"
              labelText={"quantity"}
              type="number"
              name="quantity"
              id="quantity"
              placeholder=""
              value={quantity}
              state={(e) => setQuantity(e.target.value)}
            />
            <Input
              label="pieces"
              labelText={"pieces"}
              type="number"
              name="pieces"
              id="pieces"
              placeholder=""
              value={pieces}
              state={(e) => setPieces(e.target.value)}
            />
            <Input
              label="amount"
              labelText={"amount"}
              type="text"
              name="amount"
              id="amount"
              placeholder=""
              value={amount}
              state={(e) => setAmount(e.target.value)}
            />
            <Button text="edit product" action={handleEdit}/>
          </form>
        </div>
      }

    </div>
    </>
  )
}
