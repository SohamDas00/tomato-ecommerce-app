import React, { useContext, useState } from 'react'
import './Header.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'

const Header = ({setSigninPopup}) => {
  const [menu,setMenu]=useState('home')
  const {getTotalAmount}=useContext(StoreContext)

  return (
    <div className="header">
      <Link to="/"><img src={assets.logo} alt="logo" className='logo'/></Link>
      <ul className='header-list'>
        
      <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
        <a href='#app-download' onClick={()=>setMenu("mobile app")} className={menu==="mobile app"?"active":""}>Mobile app</a>
        <a href='#footer' onClick={()=>setMenu("contacts")} className={menu==="contacts"?"active":""}>Contacts</a>
      </ul>
      <div className='header-right'>
        <img src={assets.search_icon} alt="search" className='search'/>
        <div className="cart-main">
          <Link to="/cart"><img src={assets.basket_icon} alt="cart" className='cart'/></Link>
          <div className={getTotalAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setSigninPopup(true)} className='signin'>Sign in</button>
      </div>
    </div>
  )
}

export default Header
