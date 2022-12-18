import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Header from '../components/Header'

export default function Stats() {
  return (
    <>
    <Header />
    <div className='flex gap-2 justify-center'>
        <Link to='/monthly-stats'>
        <Button text="monthly stats"/>
        </Link>
        <Link to='/daily-stats'>
        <Button text="daily stats"/>
        </Link>
        <Link to='/today-stats'>
        <Button text="today stats"/>
        </Link>
        <Link to='/payment-stats'>
        <Button text="payment stats"/>
        </Link>
    </div>
    </>
  )
}
