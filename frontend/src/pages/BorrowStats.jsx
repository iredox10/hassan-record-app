import React from 'react'
import Header from '../components/Header'
import HeadText from '../components/HeadText'
import useFetch from '../hooks/useFetch'

export default function BorrowStats() {
  const {data,err} = useFetch('http://localhost:4000/borrowed-stats')
  console.log(data)
  return (
    <div>
      <Header />
      <HeadText text='list of products collected this month' />
      <div className='max-w-[90%] mx-auto' >
    {data && data.stats.map(borrow =>(
        <div key={borrow.id}>
          <div>
            <h1 className='bg-green-400 uppercase p-2 text-center font-bold text-white mt-32'>on : {borrow._id}</h1>
            {borrow.products.map(p =>(
              <div className=''>
                <table className='w-full bg-red-50 capitalize'>
                  <tr className='bg-red-500'>
                    <th>collector</th>
                    <th>product</th>
                    <th>amount</th>
                    <th>date</th>
                  </tr>
                  <tr className='text-center capitalize'>
                    <td className='py-2'>{p.collector}</td>
                    <td className='py-2'>{p.product}</td>
                    <td className='py-2'>N {p.amount}</td>
                    <td className='py-2'>{p.collectedOn}</td>
                  </tr>
                </table>
              </div>
            ))}
          </div>
        </div>
    ))}
    </div>
    </div>
  )
}
