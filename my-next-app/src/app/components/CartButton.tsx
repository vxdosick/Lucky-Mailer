"use client"
import { useState } from 'react'

interface CartButtonProps {
    cart: boolean;
    link: boolean;
    free: boolean;
}
export const CartButton = ({cart, link, free}: CartButtonProps) => {
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
            className={`
                ${free ? "button__general" : isIncart ? "button__secondary" : "button__general"}
                `}>
                {free ? "Copy mail" : isIncart ? "Remove" : "Add to cart"}
            </button>
        )
    }
}