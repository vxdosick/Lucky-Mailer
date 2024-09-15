"use client"
import { useState } from 'react'

interface CartButtonProps {
    cart: boolean;
    link: boolean;
}
export const CartButton = ({cart, link}: CartButtonProps) => {
    const [isIncart, setIsInCart] = useState(cart)
    if(link) {
        return (
            <a onClick={() => setIsInCart(!isIncart)} 
            href="#"
            className={`${isIncart ? "button__secondary" : "button__general"}`}
            >
                {isIncart ? "Remove" : "Add to cart"}
            </a>
        )
    }
    if (!link) {
        return (
            <button onClick={() => setIsInCart(!isIncart)} 
            className={`${isIncart ? "button__secondary" : "button__general"}`}
            >
                {isIncart ? "Remove" : "Add to cart"}
            </button>
        )
    }
}