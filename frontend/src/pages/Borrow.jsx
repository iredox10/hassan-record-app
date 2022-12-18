import axios from "axios";
import React, {useState } from "react";
import {useLocation, useNavigate} from 'react-router-dom'
import Form from "../components/Form";
import Header from "../components/Header";
import HeadText from "../components/HeadText";
import PTag from "../components/PTag";
import useFetch from "../hooks/useFetch";

export default function Borrow() {
  const navigate = useNavigate()
  const { data: products, err } = useFetch(
    "http://localhost:4000/view-borrows"
  );

  const [collectorName, setCollectorName] = useState(null)
  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(null)
  const [amount, setAmount] = useState(null)
  const [selectedProducts, setSelectedProducts] = useState([])
  const [error,setError] = useState('')
  const [remove, setRemove] = useState(false)
  const [successfull, setsuccessfull] = useState(false)
  const AddToArray = (e) =>{
    e.preventDefault()
    if(collectorName == null || quantity == null || amount == null || product == null ) {
      setError('please fill all the field')
      return
    }else{
      setSelectedProducts((p) => [...p, {product,quantity,amount,collectorName}])
      setError('')
      console.log(selectedProducts)
    }
  }

  const handleSubmit = async (e)=>{
    e.preventDefault()
      try{
          const res = await axios.post("http://localhost:4000/borrow",selectedProducts);
          console.log(res.data)
          setsuccessfull(true)
          const timerId = setTimeout(() => {
            setsuccessfull(false)
            clearTimeout(timerId)
          }, 3000);
          setCollectorName(null)
          setQuantity(null)
          setAmount(null)
          setProduct(null)
      }catch(err){
        console.log(err)
      }
  }

  const handleRemove = (e) =>{
    e.preventDefault()
    const p = selectedProducts.filter()
    console.log(e)
  }

  return (
    <div>
      <Header text />
        <div>
      <div className="px-5 capitalize font-bold text-2xl"></div>
          <div className="flex justify-between items-center w-[80%] p-5">
            <HeadText text="borrow page" />
          </div>
          {error && <div className="text-red-600">{error} </div>}
          <div className="flex px-5 ">
            <div className="flex-1 pr-4 border-r-4 border-red-600">
              <form  className="capitalize">
                <div className="flex gap-10">
                <div className="flex flex-col">
                  <label htmlFor="collectorName">collectorName</label>
                  <input type="text" required name="collectorName" className="border-2" value={collectorName} onChange={(e)=> setCollectorName(e.target.value)}  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="productName">productName</label>
                  <input type="text" required name="productName" className="border-2" value={product} onChange={(e)=> setProduct(e.target.value)} />
                </div>

                </div>
                <div className="flex gap-10">
                <div className="flex flex-col">
                  <label htmlFor="quantity">quantity</label>
                  <input type="number" required name="quantity" className="border-2" value={quantity}  onChange={(e)=> setQuantity(e.target.value)} />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="amount">amount</label>
                  <input type="number" required name="amount" className="border-2" value={amount} onChange={(e)=> setAmount(e.target.value)} />
                </div>
                </div>
                <button onClick={AddToArray}>add to list</button>
              </form>
            </div>
            <div className="pl-4 max-w-[50%]">
              <form onSubmit={handleSubmit} className='flex  flex-wrap gap-6 '>
                <div className="flex flex-wrap gap-5  ">
                {selectedProducts && selectedProducts.length <= 0 ? (
                  <div className="capitalize flex font-bold">no product to sale</div>
                ) :(selectedProducts.map((sp, i) => (
                    <div key={i} className="shadow-md p-3">
                      <PTag span="collector name" text={sp.collectorName} />
                      <PTag span="product name" text={sp.product} />
                      <PTag span="quantity" text={sp.quantity} />
                      <PTag span="amount" text={sp.amount} />
                      <button className="p-3 mt-2  bg-red-600 capitalize text-white" onClick={handleRemove}>remove</button>
                    </div>
                  ))
                )}
                </div>
                {selectedProducts.length > 0 ? <button className="p-4 bg-gray-600 capitalize text-white">sale</button> : ""}
              </form>
            </div>
          </div>
        </div>
        {successfull ? <div className="absolute top-[20%] min-w-[50%] left-80 bg-gray-800 min-h-[50%]"> 
            <h1 className="text-white capitalize">done</h1>
        </div> : ''}
    </div>
  );
}
