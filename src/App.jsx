import React, { useState } from 'react'
import Header from './Components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Footer from './Components/Footer/Footer'
import SigninPopup from './Components/SigninPopup/SigninPopup'
import ScrollToTop from './Components/ScrollToTop'

const App = () => {
  const [signinPopup, setSigninPopup] = useState(false)

  return (
    <>
      {signinPopup && <SigninPopup setSigninPopup={setSigninPopup} />}
      <div className='app'>
        <Header setSigninPopup={setSigninPopup} />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/placeOrder' element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
