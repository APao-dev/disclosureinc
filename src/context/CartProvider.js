import { useState, useEffect } from 'react';

import { CartContext } from './CartContext';


//GUARDAR ACÁ PRODUCTO Y CANTIDAD EN FORMA DE OBJETO
// DEBE TENER LÓGICA INCORPORADA DE NO ACEPTAR DUPLICADOS

const CartProvider = ({ defaultValue = [], children}) => {

    const [cart, setCart] = useState(defaultValue);
    const [totalPrice, setTotalPrice] = useState(0);
    const addItem = (items, quantity) => {
        setCart([...cart, {items,quantity}])
    };

    const removeItem = (itemId) => {
        setCart(cart.filter((re) => re.item.id !== itemId))
    };

    const clear = () => {
        setCart([]);
    };

    const isInCart =(id) => {
        const product = cart.find((item) => item.id === id);
        if(product) {
            return true;
        }else {
            return false;
        }
    };

    const Total = () => {
        let total =0;
        for(let i= 0; i < cart.length; i++) {
            total = total + cart[i].item.price * cart[i].quantity;
        }
        return total;
    }


useEffect(() => {
    setTotalPrice(Total());
}, [cart]);


return(
    <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart, totalPrice }}>
       
       {children}
    </CartContext.Provider>

    )
};
export default CartProvider;