import { createContext } from "react";
import { useState } from "react";


export const CartContext = createContext();

const CartProvider = ({ children }) => {

    


const [cart, SetCart] = useState([]);

const isInCart = (id) => {
    return cart.some(element => element.id === id)

}

const clearCart = () =>{
    SetCart([]);
}

const removeFromCart = (id) =>{
    SetCart(cart.filter(element => element.id !== id))
}

const addToCart = (quantity, item) => {

    SetCart([]);

    if (isInCart(item.id)) {
        let producto = cart.find(element => element.id === item.id)
        cart[cart.indexOf(producto)].quantity += quantity
        SetCart([...cart])
    } else {
        SetCart([...cart, {...item, quantity:quantity}])
    }

}

const cartSuma = () => {
    return cart.reduce((total, item) => total+=item.quantity*item.precio, 0);
}

const totalQuantity = () => {
    const cartCopy = [...cart];
    let count = 0;
    cartCopy.forEach((item) => {
        count = count + item.quantity;
    }) 

    return count;
}


    return (
        <CartContext.Provider value={{
            cart, 
            SetCart, 
            addToCart, 
            clearCart,
            removeFromCart,
            totalQuantity,
            cartSuma}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;