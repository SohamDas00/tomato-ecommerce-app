import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext'

const Cart = () => {
  const { cartItem, food_list, removeCartItem,getTotalAmount,navigate} = useContext(StoreContext)
  return (
    <div className='Cart'>
      <div className="cart-item">
        <div className="cart-item-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          if (cartItem[item._id] > 0) {
            return (
              <>
                <div className="cart-item-title cart-item-items">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItem[item._id]}</p>
                  <p>${item.price * cartItem[item._id]}</p>
                  <p onClick={() => removeCartItem(item._id)} className='cross'>x</p>
                </div>
                <hr />
              </>
            )
          }
        })}
      </div>
      <div className="cart-button">
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
          <button onClick={()=>navigate('/placeOrder')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="promo-code">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="input">
              <input type="text" placeholder='promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
