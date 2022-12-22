import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Header from '../components/Header'

export default function BorrowPage() {
  return (
    <div>
      <Header />
      <div className='md:flex justify-center gap-5'>
      <Link to='/borrow/add-borrow'><Button text='add borrow' /></Link>
        <Link to='/borrow/borrow-stats'><Button text='borrow-stats' /> </Link>
        </div>
    </div>
  )
}
