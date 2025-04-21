import { createContext, useState } from "react";
import { food_list } from "../assets/assets";
import { useNavigate } from "react-router-dom";
export const StoreContext = createContext(null)

const StoreContextProvider = (props) =>{

    const [cartItem,setCartItem]=useState({})

    const navigate=useNavigate();

    const addCartItem=(cartId)=>{
        if (!cartItem[cartId]) {
            setCartItem((prev)=>({...prev,[cartId]:1}))
        } else {
            setCartItem((prev)=>({...prev,[cartId]:cartItem[cartId]+1}))
        }
    }
    const removeCartItem=(cartId)=>{
        setCartItem((prev)=>({...prev,[cartId]:cartItem[cartId]-1}))
    }

    const getTotalAmount=()=>{
        let totalAmount=0
        for(const item in cartItem){
            if(cartItem[item]>0){
                let itemInfo=food_list.find((product)=>product._id===item)
                totalAmount+=itemInfo.price*cartItem[item]
            };
        };
        return totalAmount
    }

    const contexValue={
        food_list,
        cartItem,
        setCartItem,
        addCartItem,
        removeCartItem,
        getTotalAmount,
        navigate
    }

    return(
        <StoreContext.Provider value={contexValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider