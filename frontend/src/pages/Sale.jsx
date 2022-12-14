import axios from "axios";
import React, {useState } from "react";
import {useLocation, useNavigate} from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext";
import Form from "../components/Form";
import Header from "../components/Header";
import HeadText from "../components/HeadText";
import PTag from "../components/PTag";
import { useAuthContext } from "../hooks/UseAuthContext";
import useFetch from "../hooks/useFetch";


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
  const [employer, setEmployer] = useState('')
  const [error,setError] = useState('')
  const [remove, setRemove] = useState(false)
  const {user,dispatch} = useAuthContext(AuthContext)

  const AddToArray = (e) =>{
    e.preventDefault()
    if(productName === null || quantity === null || amount === null || payment === null ) {
      setError('please fill all the field')
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
          navigate('/print', {state:{transactions: res.data.transaction, user: user.user.username}})
      }catch(err){
        console.log(err)
      }
  }

  const handleLogout = ()=>{
    dispatch({type:'LOGOUT'})
  }

  const handleRemove = (e) =>{
    e.preventDefault()
    // const selectedProducts = selectedProducts.filter(p => p =! e.target.value)
    console.log(e)
  }
  let activeUser
 user ? activeUser = user.user.username : activeUser = ''
  return (
    <div>
      <Header user={activeUser} action={handleLogout}/>
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
                user = {activeUser}
                setEmployer={setEmployer}
                AddToArray={AddToArray}
              />
            </div>
            <div className="pl-4 max-w-[50%]">
              <form onSubmit={handleSubmit} className='flex  flex-wrap gap-6 '>
                <div className="flex flex-wrap gap-5  ">
                {selectedProducts && selectedProducts.length <= 0 ? (
                  <div className="capitalize flex font-bold">no product to sale</div>
                ) :(selectedProducts.map((sp, i) => (
                    <div key={i} className="shadow-md p-3">
                      <PTag span="product name" text={sp.productName} />
                      <PTag span="quantity" text={sp.quantity} />
                      <PTag span="amount" text={sp.amount} />
                      <PTag span="payment" text={sp.payment} />
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
    </div>
  );
}
