import React from 'react'
import Header from '../components/Header'
import HeadText from '../components/HeadText'
import useFetch from '../hooks/useFetch'

export default function MonthlyStats() {
    const {data,err} = useFetch('http://localhost:4000/monthly-stats')
    console.log(data)
  return (
    <div>
        <Header />
        <HeadText text={'this year stats'} />
        {data && data.stats.map(s => (
            <div key={s._id} className='capitalize p-5 shadow-lg '>
            <p className='font-bold text-5xl'>{s._id}<sup>th</sup> month </p>
            <p className='text-2xl mt-4'>the total sale is: <span className='block font-bold  '> N{s.totalSale} </span></p>
            </div>
        ))}
    </div>
  )
}
