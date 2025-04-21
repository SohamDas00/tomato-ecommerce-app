import React, { useState } from 'react'
import './SigninPopup.css'
import { assets } from '../../assets/assets'
const SigninPopup = ({setSigninPopup}) => {
     const [signin,setSignin]=useState("Sign Up")
  return (
    <div className='login-popup'>
        <form className="login-container">
            <div className="login-text">
                <h2>{signin}</h2>
                <img  onClick={()=>setSigninPopup(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-input">
                {signin==="Login"
                ?
                <></>
                : 
                <input type="text" placeholder='Enter your name..' required/>}
                <input type="email" placeholder='Enter your email..' required/>
                <input type="password" placeholder='Enter your password..' required/>
            </div>
            <button>{signin==="Sign Up"?"Create Account":"Login"}</button>
            <div className="login-buttom">
                <input type="checkbox" required/>
                <p>By Continuing, i agree the term of use & privacy policy</p>
            </div>
            <div className="alreadyhaveacct">
                {signin==="Sign Up"?
                <>
                    <p>Already Have an account</p>
                    <span onClick={()=>setSignin("Login")}>Login</span>
                </>
                :
                <>
                    <p>Create a new Account ?</p>
                    <span onClick={()=>setSignin("Sign Up")}>Click here</span>
                </>
                }
            </div>
        </form>
    </div>
  )
}

export default SigninPopup
