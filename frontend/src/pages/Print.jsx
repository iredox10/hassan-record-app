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
  console.log(total)
  return (
    <>
    <div className='border-2 mt-2 w-[50%] m-auto p-2 print:p-2 capitalize'>
      <div className='flex justify-center'>
    <img src={logo} alt="logo" className='w-[10%]' />
    </div>
    <div className='text-center'>
    <h2>alin dabaga investment</h2>
    <p>dealers in all kind of textiles and materials such as: swiss lace, yards, cahsmerem geekay yards, atamfa, shadda, laces, etc</p>
    <p className=''>
      <span>address</span>
      <span>shop no. 17 kwari market filin parking 'yan tebuta mall, opp, mawaffaq global impulse</span>
    </p>
    </div>
    <p className='text-center font-bold uppercase'>products</p>
    {
      transactions.map(t =>(
        <div>
          <div className='flex justify-between'>
          <p>{t.productName}</p>
          <p>N {t.amount}</p>
          </div>
        </div>
      ))
    }
    <div className='flex justify-between mt-5'>
      <p className='font-bold'>total:</p>
      <p>N {total}</p>
    </div>
    <div className='flex justify-between mt-5'>
      <p className='font-bold'>employer:</p>
      <p>{user}</p>
    </div>
    </div>
    </>
  )
}
