import React, { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import ItemCart from '../../components/ItemCart/ItemCart';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './Cart.css';
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
      
      
// function createOrder() {
//         if(buyer.trim() === ""){
//          alert('Debes completar los datos requeridos');   
//         }else{
//             alert('Tu pedido se ha realizado con éxito')
//         }
            
//     }

         

    return(
        <div className="container">
            {/* <h2>Hola desde Cart ...este es tu carrito</h2> */}
            <div>
                {cart.lenght === 0 ? (
                    <h4 className="message">Disculpa, pero no has seleccionado ningún producto</h4>
                ) : (
                    cart.map((item, key) => 
                    <ItemCart key={key} {...item}/>)
                    )}
                    <div>
                        <h3>TOTAL A PAGAR $ {total}</h3>
                    </div>
                    <Button onClick={() =>clear()} style={{  border: "solid",  color:"rgb(181, 89, 103)", margin: "10px"}}>Vaciar Carrito</Button> 

                    <Link to="/posts" style={{textDecoration:"none"}}>

                    <Button style={{  border: "solid",  color:"rgba(228, 142, 66, 0.94)", textDecoration: "none"}}>
                        Volver a la lista
                    </Button>
                    </Link> 

            </div>

            <div>
            
                <form className="form-buyer" onSubmit={handleOnSubmit} type="submit">
                <label htmlFor="name">Nombre</label>
                    <input className="form-buyer__input"
                    type="text"
                    name="name"
                    onChange={handleInputChange}
                    id="name"
                    placeholder="Nombre "
                    />
                    
                    
                    <label htmlFor="tel">Teléfono</label>
                    <input className="form-buyer__input"
                    type="text"
                    name="phone"
                    onChange={handleInputChange}
                    id="tel"
                    placeholder="Teléfono"
                    />
                    
                    <label htmlFor="email">Email</label>
                    <input className="form-buyer__input"
                    type="email"
                    name="email"
                    onChange={handleInputChange}
                    id="email"
                    placeholder="Email"
                    />
                    <button className="form-button" onClick={() => createOrder(buyer, cart, total)}>
                Confirmar Pedido
                </button>
                </form>
              

               
                
                 
            </div>


        </div>

    )
}