import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import {useNavigate} from 'react-router-dom'
import Button from "../components/Button";
import Form from "../components/Form";
import Header from "../components/Header";
import HeadText from "../components/HeadText";
import Input from "../components/Input";
import PTag from "../components/PTag";
import useFetch from "../hooks/useFetch";
import Print from "./Print";

export default function Sale() {
  const navigate = useNavigate()
  const { data: products, err } = useFetch(
    "http://localhost:4000/view-products"
  );
  const [selectedProducts, setSelectedProducts] = useState([])
  const [productName, setProductName] = useState(null)
  const [quantity, setQuantity] = useState(null)
  const [amount, setAmount] = useState(null)
  const [payment, setPayment] = useState(null)
  const [prints, setPrints] = useState()
  const [error,setError] = useState('')

  const AddToArray = (e) =>{
    e.preventDefault()
    if(productName == null ) {
      setError('please add product name')
      return
    }else{
      setSelectedProducts((p) => [...p, {productName,quantity,amount,payment}])
      setError('')
      console.log(selectedProducts)
    }
  }

  const handleSubmit = async (e)=>{
    e.preventDefault()
      try{
          const res = await axios.post("http://localhost:4000/sale",selectedProducts);
          console.log(res.data)
          setPrints(res.data)
          // navigate('/print')
      }catch(err){
        console.log(err)
      }
  }


  return (
    <div className="relative">
      {print.length > 0 ? (
        <Print prints={prints} />
      ) : (
        <div>
          <div className="flex justify-between items-center w-[80%] p-5">
            <HeadText text="select product to sale" />
          </div>
          {error && <div className="text-red-600">{error} </div>}
          <div className="flex max-h-max gap-5 p-5">
            <div className="flex-1 pr-4 border-r-4 border-gray-500">
              <Form
                products={products}
                setProductName={setProductName}
                setQuantity={setQuantity}
                setAmount={setAmount}
                setPayment={setPayment}
                AddToArray={AddToArray}
              />
            </div>
            <div className="flex  flex-wrap gap-5">
              <form onSubmit={handleSubmit} className='flex flex-wrap gap-6 max-w-[70%]'>
                {selectedProducts && selectedProducts.length <= 0 ? (
                  <div>no product selected to sale</div>
                ) : (
                  selectedProducts.map((sp, i) => (
                    <div key={i}>
                      <PTag span="product name" text={sp.productName} />
                      <PTag span="quantity" text={sp.quantity} />
                      <PTag span="amount" text={sp.amount} />
                      <PTag span="payment" text={sp.payment} />
                      <button className="p-4 bg-red-600 capitalize text-white">remove</button>
                    </div>
                  ))
                )}
              </form>
                {selectedProducts.length > 0 ? <Button text="sale" /> : ""}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
