import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import {useLocation, useNavigate} from 'react-router-dom'
import Button from "../components/Button";
import Form from "../components/Form";
import Header from "../components/Header";
import HeadText from "../components/HeadText";
import Input from "../components/Input";
import PTag from "../components/PTag";
import useFetch from "../hooks/useFetch";

export default function Sale() {
  const navigate = useNavigate()
  const { data: products, err } = useFetch(
    "http://localhost:4000/view-products"
  );
  
  const {state} = useLocation()
  const {user} = state

  const [selectedProducts, setSelectedProducts] = useState([])
  const [productName, setProductName] = useState(null)
  const [quantity, setQuantity] = useState(null)
  const [amount, setAmount] = useState(null)
  const [payment, setPayment] = useState(null)
  const [employer, setEmployer] = useState('')
  const [error,setError] = useState('')

  const AddToArray = (e) =>{
    e.preventDefault()
    if(productName == null ) {
      setError('please add product name')
      return
    }else{
      setSelectedProducts((p) => [...p, {productName,quantity,amount,payment,employer}])
      setError('')
      console.log(selectedProducts)
    }
  }

  const handleSubmit = async (e)=>{
    e.preventDefault()
      try{
          const res = await axios.post("http://localhost:4000/sale",selectedProducts);
          console.log(res.data)
          navigate('/print', {data: data})
      }catch(err){
        console.log(err)
      }
  }


  return (
    <div>
      <Header text={`welcome ${user.username}`}/>
        <div>
      <div className="px-5 capitalize font-bold text-2xl"></div>
          <div className="flex justify-between items-center w-[80%] p-5">
            <HeadText text="select product to sale" />
          </div>
          {error && <div className="text-red-600">{error} </div>}
          <div className="flex px-5 ">
            <div className="flex-1 pr-4 border-r-4 border-red-600">
              <Form
                products={products}
                setProductName={setProductName}
                setQuantity={setQuantity}
                setAmount={setAmount}
                setPayment={setPayment}
                employer = {user.username}
                setEmployer={setEmployer}
                AddToArray={AddToArray}
              />
            </div>
            <div className="pl-4 max-w-[50%]">
              <form onSubmit={handleSubmit} className='flex  flex-wrap gap-6 '>
                <div className="flex flex-wrap gap-5  ">
                {selectedProducts && selectedProducts.length <= 0 ? (
                  <div>no product selected to sale</div>
                ) : (
                  selectedProducts.map((sp, i) => (
                    <div key={i} className="shadow-md p-3">
                      <PTag span="product name" text={sp.productName} />
                      <PTag span="quantity" text={sp.quantity} />
                      <PTag span="amount" text={sp.amount} />
                      <PTag span="payment" text={sp.payment} />
                      <button className="p-3 mt-2  bg-red-600 capitalize text-white">remove</button>
                    </div>
                  ))
                )}
                </div>
                {selectedProducts.length > 0 ? <button className="p-4 bg-gray-600 capitalize text-white">sale</button> : ""}
              </form>
            </div>
          </div>
        </div>
    </div>
  );
}
