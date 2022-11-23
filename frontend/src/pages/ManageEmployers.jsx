import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import Button from '../components/Button'
import Header from '../components/Header'
import Input from '../components/Input'
import PTag from '../components/PTag'
import useFetch from '../hooks/useFetch'
import useFectch from '../hooks/useFetch'

export default function ManageEmployers() {
  const {data:employers,err} = useFetch('http://localhost:4000/get-users')

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e)=>{
    e.preventDefault()
    try {
      if(password != repeatPassword){
        setError('password did not match')
        return
      }
      const res = await axios.post('http://localhost:4000/add-user',{username,password})
      console.log(res.data)
      setError('')
      setUsername('')
      setPassword('')
      setRepeatPassword('')
    } catch (err) {
      const e = err.response.data.err

      console.log(e)
      setError(e)
    }
  }


  return (
    <div>
        <Header />
        <h1>list of employers</h1>
        <div className='flex p-5' >
          <div className='flex-1'>
        {employers && employers.map(e =>(
          <div>
            <PTag span='username' text={e.username} />
            <Button text='view transactions' />
          </div>
        ))}
        </div>
        <div className='w-[40%]'>
        <form onSubmit={handleSubmit} className='w-full'>
          {error && <div className='border-2 border-red-600  bg-red-600  capitalize text-white p-2'>{error}</div>}
          <Input label='username' labelText='username' type='text' name='username' id='username' value={username} state={(e => setUsername(e.target.value))} />
          <Input label='password' labelText='password' type='password' name='password' id='password' value={password} state={(e => setPassword(e.target.value))} />
          <Input label='reapeat-password' labelText='repeat-password' type='password' name='password' value={repeatPassword} id='repeatPassword' state={(e => setRepeatPassword(e.target.value))} />
          <Button text='add user' />
        </form>
        </div>
        </div>
    </div>
  )
}
