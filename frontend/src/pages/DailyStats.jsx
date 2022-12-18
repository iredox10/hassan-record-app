import React from 'react'
import Card from '../components/Card'
import Header from '../components/Header'
import HeadText from '../components/HeadText'
import useFetch from '../hooks/useFetch'

function DailyStats() {
    const {data,err} = useFetch('http://localhost:4000/daily-stats')
    const month = new Date().toDateString().slice(3,7)
    
   const totalAmount= data && data.stats.reduce((acc,value) =>{
        console.log(acc + value.totalSale)
        return acc + value.totalSale
      }, 0)
  return (
    <div>
        <Header />
        <h1 className='uppercase font-black text-4xl text-center'><u className='text-red-600'>{month}</u> stats</h1>
        <div className='flex justify-between p-5 text-center '>
        <div className='flex gap-5 text-center  '>
        {data && data.stats.map(s => (
            <div key={s._id} className='capitalize p-5 shadow-lg '>
            <p className='font-bold text-5xl'>{month} {s._id}<sup>th</sup> </p>
            <p className='text-2xl mt-4'>the total sale is: <span className='block font-bold  '> N{s.totalSale} </span></p>
            </div>
        ))}
        </div>
        <div className='basis-1/5 text-center'>
        <p className='capitalize text-2xl'>this month total sale is: <span className='font-bold block'> N{totalAmount}</span></p>
        </div>
        </div>
    </div>
  )
}

export default DailyStats