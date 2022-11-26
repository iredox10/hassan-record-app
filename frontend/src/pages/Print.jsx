import React from 'react'
import { useLocation } from 'react-router-dom'
import logo from '../assets/logo.jpg'
import PTag from '../components/PTag'

export default function Print({prints}) {
  const {state} = useLocation()
  const {transactions,user} = state
  const total = transactions.reduce((acc,value) =>{
    return acc + value.amount
  }, 0)
  return (
    <>
    <div className='border-2 rounded-md mt-2 m-auto md:w-[30%]  p-2 print:p-2 capitalize'>
      <div className='flex justify-center'>
    <img src={logo} alt="logo" className='w-[10%]' />
    </div>
    <div className='text-center'>
    <h2 className='font-bold text-xl my-2 '>alin dabaga investment</h2>
    {/* <p>dealers in all kind of textiles and materials such as: swiss lace, yards, cahsmerem geekay yards, atamfa, shadda, laces, etc</p> */}
    <p className='mt-3'>
      <span className='font-bold'></span>
      <span>shop no. 17 kwari market filin parking 'yan tebuta mall, opp, mawaffaq global impulse</span>
    </p>
    <p>
      <span className='font-bold'> </span>
      <span>08022675715, </span>
      <span>09065714523</span>
    </p>
    <div className='flex gap-3 justify-center'>
    <p>
      <span className='font-bold'>date: </span>
      <span>{new Date().toLocaleDateString()}</span>
    </p>
    <p>
      <span className='font-bold'>time: </span>
      <span>{new Date().toLocaleTimeString()}</span>
    </p>
    </div>
    </div>
    <p className='text-center font-bold uppercase my-6'>products</p>
    {
      transactions.map(t =>(
        <div>
          <div className='flex justify-between'>
          <p className='font-bold'>{t.productName}</p>
          <p>N {t.amount}</p>
          </div>
        </div>
      ))
    }
    <div className='flex justify-between mt-5'>
      <p className='font-bold'>total:</p>
      <p>N {total}</p>
    </div>
    <div className='flex items-center flex-col mt-2'>
      <p className='font-bold'>employer:</p>
      <p>{user}</p>
    </div>
    <p className='text-center mt-5'>thank you</p>
    </div>
    </>
  )
}
