"use client"
import { useState } from 'react'
export const CartButton = ({cart}: {cart:boolean}) => {
    const [isIncart, setIsInCart] = useState(cart)
    
    return (
        <button onClick={() => setIsInCart(!isIncart)} className={`${isIncart ? "button__secondary" : "button__general"}`}>
            {isIncart ? "Remove" : "Add to cart"}
        </button>
    )
}