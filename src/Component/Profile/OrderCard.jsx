import { Button, Card } from '@mui/material'
import React from 'react'

const OrderCard = () => {
  return (
    <Card className='flex justify-between items-center p-5'>
      <div className='flex items-center space-x-5'>
        <img className='h-16 w-16' src="https://images.pexels.com/photos/551991/pexels-photo-551991.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Burger in a Plate" />
        <div>
            <p>Burger</p>
            <p>₹499</p>
        </div>
      </div>
      <div>
        <Button className='cursor-not-allowed'>Completed</Button>
      </div>
    </Card>
  )
}

export default OrderCard
