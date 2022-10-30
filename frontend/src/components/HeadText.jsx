import React from 'react'

export default function HeadText({text}) {
  return (
    <div>
      <h1 className='capitalize font-bold md:text-3xl'>{text}</h1>
    </div>
  )
}
