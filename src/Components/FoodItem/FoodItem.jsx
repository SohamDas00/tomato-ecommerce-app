import React, { useContext } from 'react'
import "./FoodItem.css"
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'

const FoodItem = ({id, name, image, price, description}) => {
    const{cartItem,addCartItem,removeCartItem}=useContext(StoreContext)
    return (
        <div key={id} className='food-item'>
            <div className="food-item-image">
                <img className='food-item-image-main' src={image} alt="" />
                {!cartItem[id]?
                    <img onClick={()=>addCartItem(id)} className='add-icon' src={assets.add_icon_white} alt=''/>
                    :
                    <div className="food-item-counter">
                        <img onClick={()=>removeCartItem(id)} src={assets.remove_icon_red} alt="" />
                        <p>{cartItem[id]}</p>
                        <img onClick={()=>addCartItem(id)} src={assets.add_icon_green} alt="" />
                    </div>
                }
            </div>
            <div className="food-item-info">
                <div className='food-item-name-rating'>
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <div className="description">
                    <p>{description}</p>
                </div>
                <div className='price'>
                    <p>${price}</p>
                </div>
            </div>
        </div>
    )
}

export default FoodItem
