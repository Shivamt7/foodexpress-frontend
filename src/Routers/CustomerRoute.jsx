import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../Component/Homepage/Home'
import RestaurantDetails from '../Component/Restaurant/RestaurantDetails'
import Authentication from '../Component/Authentication/Authentication'
import Profile from '../Component/Profile/Profile'
import Cart from '../Component/Cart/Cart'

const CustomerRoute = () => {
  return (
    <div>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/account/:register' element={<Home />}/>
            <Route path='/restaurant/:city/:title/:id' element={<RestaurantDetails/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/my-profile/*' element={<Profile />}/>
        </Routes>
        <Authentication />
    </div>
  )
}

export default CustomerRoute
