import React from 'react'

export default function HeadText({text}) {
  return (
    <div>
      <h1 className='uppercase mb-8 text-center text-black font-bold text-xl md:text-3xl'>{text}</h1>
    </div>
  )
}
