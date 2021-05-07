import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import ItemCart from '../../components/ItemCart/ItemCart';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default function CartContainer() {
    const{ cart, clear } = useContext(CartContext);
    let total = 0;

    for(let i =0; i< cart.length; i++) {
        total = total + cart[i].item.price * cart[i].quantity;
    }


    return(
        <div>
            <h1>Hola desde Cart ...este es tu carrito</h1>
            <div className="card w-100 message-card">
                {cart.lenght === 0 ? (
                    <h4>Disculpa, pero no has seleccionado ningún producto</h4>
                ) : (
                    cart.map((item, key) => 
                    <ItemCart key={key} {...item}/>)
                    )}
                    <div>
                        <h3>${total}</h3>
                    </div>
                    <Button onClick={() =>clear()}>Vaciar Carrito</Button>

                    <Link to="/posts" >
          <Button >
            Volver a la lista
          </Button>
        </Link>

            </div>
        </div>
    )
}