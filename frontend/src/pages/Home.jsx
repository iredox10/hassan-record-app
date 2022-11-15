import React from 'react'
import Login from './Login'
import logo from '../assets/logo.jpg'
export default function Home() {
  return (
    <div className='flex gap-5'>
      <div className='bg-red-500 p-5 w-[60vw] h-[100vh]'>
        <h1 className='text-white text-center p-40 uppercase font-bold text-5xl text-center'>welcome to alin dabaga investment (ADI)</h1>
        </div>
        <div className='w-[50%] p-40'>
        <Login />
        </div>
        <div className='absolute w-[7%] border-2 border-red-500  top-2 left-[50%]'>
          <img src={logo} alt="" className='w-full' />
        </div>
    </div>
  )
}
