import React from 'react'

export default function HeadText({text}) {
  return (
    <div>
      <h1 className='capitalize text-gray-600 font-bold md:text-3xl'>{text}</h1>
    </div>
  )
}
