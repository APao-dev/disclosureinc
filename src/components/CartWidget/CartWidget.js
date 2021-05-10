 import React, { useContext } from 'react';
 import { Link } from "react-router-dom";
// Intentando agregar la cartWidget al navBar
// Icono carrito
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
// Importando el CSS
import './CartWidget.css'
import { CartContext } from '../../context/CartContext';

export default function CartWidget(){

    const { cart } = useContext(CartContext);
    let cant = 0;

    for (let i = 0; i < cart.length; i++) {
        cant = cant + cart[i].quantity;
    }

    return(
        <Link to= '/cart'>
        <div>
            <div className="cart-number" >{cant}</div>
            <ShoppingCartOutlinedIcon  id="shopping-cart" style={{width:"30px",  height:"50px"}}/> 
        </div>
        </Link>
    )
}

