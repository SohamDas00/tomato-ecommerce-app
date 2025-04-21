import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <>
    <div className="footer" id='footer'>
        <div className='main-footer'>
            <div className="footer-description">
                <img src={assets.logo} alt="" />
                <p>Our food delivery app offers a seamless way to explore and order your favorite meals from the best restaurants around you. Whether you're craving something spicy, sweet, or healthy, we’ve got you covered with a wide variety of dishes across multiple categories. </p>
                <div className="food-social">

                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                </div>
            </div>
            <div className="food-page">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>privacy policy</li>
                    <li>Delivary</li>
                </ul>
            </div>
            <div className="food-touch">
                <h2>Get in Touch</h2>
                <ul>
                    <li>91+ 9854634356</li>
                    <li>example@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr className='hr'/>
        <p className='copyright'>Copyright 2025 @ Tomato.com - All Rights Resered</p>
    </div>
    </>
  )
}

export default Footer
