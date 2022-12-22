import React from 'react'
import { FaExclamationCircle } from 'react-icons/fa'

export default function ErrorPrompt({error}) {
  return (
    <div>
        <div className="text-red-600 flex items-center gap-2 p-5  font-bold capitalize"><FaExclamationCircle /> {error} </div>
    </div>
  )
}
