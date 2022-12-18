import React from 'react'
import Header from '../components/Header'
import useFetch from '../hooks/useFetch'

export default function MonthlyStats() {
    const {data,err} = useFetch('http://localhost:4000/monthly-stats')
    console.log(data)
  return (
    <div>
        <Header />
        {data && data.stats.map(s => (
            <div>
            <div>month: {s._id}</div>
            <div>total sale: N {s.totalSale}</div>
            </div>
        ))}
    </div>
  )
}
