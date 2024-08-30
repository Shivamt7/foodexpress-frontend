import { Card, Chip, IconButton } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const RestaurantCard = () => {
  return (
    <Card className='w-[18rem]'>
        <div className={`${true?'curser-pointer':"curser-not-allowed"}relative`}>
            <img className='w-full h-[10rem] rounded-t-md object-cover' src="https://images.pexels.com/photos/17315404/pexels-photo-17315404/free-photo-of-sitting-place-in-restaurant-with-menu.jpeg?auto=compress&cs=tinysrgb&w=400" alt="chairs in the restaurant" />
            <Chip 
                size='small'
                className='absolute top-2 left-2'
                color={true?"success":"error"}
                label={true?"open":"closed"}
            />
        </div>
        <div className='p-4 textPart lg:flex w-full justify-between'>
            <div className='space-y-1'>
                <p className='font-semibold text-lg'>
                    Indian Fast Food
                </p>
                <p className='text-gray-500 text-sm'>
                    Craving it all? Dive into global fla
                </p>
            </div>
            <div>
                <IconButton>
                    {true?<FavoriteIcon/>:<FavoriteBorderIcon/>}
                </IconButton>
            </div>
        </div>
    </Card>
  )
}

export default RestaurantCard
