"use client"

interface CartButtonProps {
    cart?: boolean;
    link?: boolean;
    free?: boolean;
    text?: string;
    onClickFunc?: () => void;
}
export const CartButton = ({cart, link, text, onClickFunc}: CartButtonProps) => {
    // const [isIncart, setIsInCart] = useState(cart)
    if(link) {
        return (
            <a 
            href="#"
            className={"button__secondary"}
            // `${isIncart ? "button__secondary" : "button__general"}`
            >
                {/* {isIncart ? "Remove" : "Add to cart"} */}
            </a>
        )
    }
    if (!link) {
        return (
            <button 
                onClick={onClickFunc}
                className={"button__general"}>
                {/* {free ? "Copy mail" : isIncart ? "Remove" : "Add to cart"} */}
                {text ? text : "Get mail"}
            </button>
        )
    }
}