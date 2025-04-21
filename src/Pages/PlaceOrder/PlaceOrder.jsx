import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'

const PlaceOrder = () => {
  const {getTotalAmount}=useContext(StoreContext)
  return (
    <form className="placeorder">
      <div className="left">
        <h2>Delivery Information</h2>
        <div className="multi-name">
          <input type="text" placeholder='First name' required/>
          <input type="text" placeholder='Last name' required/>
        </div>
        <input type="email" placeholder='Email address'required/>
        <input type="text" placeholder='Street' required/>
        <div className="multi-name">
          <input type="text" placeholder='City' required/>
          <input type="text" placeholder='state' required/>
        </div>
        <div className="multi-name">
          <input type="text" placeholder='Zip code' required/>
          <input type="text" placeholder='Country' required/>
        </div>
        <input type="text" placeholder='Phone' required/>
      </div>
      <div className="right">
        <div className="cart-total">
            <h3>Cart Totals</h3>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${getTotalAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>${getTotalAmount()===0?"0":2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Total</p>
                <p>${getTotalAmount()===0?"0":getTotalAmount()+2}</p>
              </div>
              <hr />
            </div>
            <button>PROCEED TO PAYMENT</button>
          </div>
      </div>
    </form>
  )
}

export default PlaceOrder
