import React, { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import ItemCart from '../../components/ItemCart/ItemCart';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const { createOrder } = require('../../services/post.service');


export default function CartContainer() {
    const{ cart, clear } = useContext(CartContext);
    let total = 0;

    for(let i =0; i< cart.length; i++) {
        console.log(cart);
        total = total + cart[i].items.price * cart[i].quantity;
    }

    const [buyer, setBuyer] = useState(
        { name: "", 
        phone: "", 
        email: "" });
        
    const handleInputChange = (e) => {
        setBuyer({
          ...buyer,
          [e.target.name]: e.target.value,
        });
      };   

      const handleOnSubmit = (e) => {
        setBuyer({
          ...buyer,
          [e.target.name]: e.target.value,
        });
      };  
      

         

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
                        <h3>$ {total}</h3>
                    </div>
                    <Button onClick={() =>clear()}>Vaciar Carrito</Button> <br></br>

                    <Link to="/posts" >

                    <Button >
                        Volver a la lista
                    </Button>
                    </Link> <br></br>   

            </div>

            <div>
            
                <form onSubmit={handleOnSubmit}>
                <label htmlFor="name">Nombre</label>
                    <input
                    type="text"
                    name="name"
                    onChange={handleInputChange}
                    id="name"
                    placeholder=" "
                    />
                    
                    
                    <label htmlFor="tel">Teléfono</label>
                    <input
                    type="text"
                    name="phone"
                    onChange={handleInputChange}
                    id="tel"
                    placeholder=" "
                    />
                    
                    <label htmlFor="email">Email</label>
                    <input
                    type="email"
                    name="email"
                    onChange={handleInputChange}
                    id="email"
                    placeholder=" "
                    />
                </form>
                <br></br>
                <Button onClick={createOrder}>
          
                Confirmar Pedido
  
                </Button> 

            </div>


        </div>

    )
}