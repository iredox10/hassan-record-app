import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Header from '../components/Header'

export default function Stats() {
  return (
    <>
    <Header />
    <div className='flex gap-2 justify-center'>
        <Link to='last-month-stats'>
        <Button text="last month" />
        </Link>
        <Link to='yesterday-stats'>
        <Button text="yesterday" />
        </Link>
        <Link to='last-week-stats'>
        <Button text="last week" />
        </Link>
        <Link to='payment-stats'>
        <Button text="payment stats" />
        </Link>
    </div>
    </>
  )
}
