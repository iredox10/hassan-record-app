import React from 'react'
import PTag from '../components/PTag'

export default function Print({prints}) {
  return (
    <div className='bg-black opacity-5 h-[100vh] w-[100vw] absolute z-10'>
      {prints && prints.map(p =>(
        <div>
          <PTag span='product name' text={p.productName} />
        </div>
      ))}
    </div>
  )
}
