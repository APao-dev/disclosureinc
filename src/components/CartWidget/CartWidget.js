 import React from 'react';

// Intentando agregar la cartWidget al navBar
// Icono carrito
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
// Importando el CSS
import './CartWidget.css'

export default function CartWidget(){

    return(
        <div>
            <ShoppingCartOutlinedIcon  id="shopping-car" style={{width:"20px"}}/> 
        </div>
    )
}

