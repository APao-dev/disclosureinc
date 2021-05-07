import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import ItemCountContainer from '../../containers/ItemCountContainer/ItemCountContainer';
import{ CartContext } from '../../context/CartContext';
// import './ItemDetail.css';
import { useHistory } from 'react-router-dom';


export default function ItemDetail({item}) {
    //Estados
    const[quantityItemAdd, setQuantityAdd] = useState([]);
    const initial = 1;
    const[finishBuy, setFinishBuy] = useState(false);
    
    const{cart, addItem} = useContext(CartContext);

    const addToCart = () => {
        item.stock -= quantityItemAdd;
        setQuantityAdd(initial);

        addItem(item, quantityItemAdd);
    }

    const history = useHistory();



useEffect(() => {
    setQuantityAdd(quantityItemAdd);
}, []);


    return( 
    
       <div ><h2>Descripción del producto</h2>
            <div style={{display: "flex"}}>
                        
                <div  key={item.id}>  
                <img src={item.image} alt={item.image}></img>
                <p>Categoría: {item.categorie}</p> <br></br> 
                <p>{item.title}</p>
                
                <p>Detalles: {item.description}</p>                    
                <p>Precio: {item.price}</p><br></br>
                </div>

            <ItemCountContainer product ={item} 
            stock={item.stock} value={quantityItemAdd} setQuantityAdd={setQuantityAdd} setFinishBuy={setFinishBuy}/>

          

             { 
             finishBuy ? (
                <Button onClick={() => history.push('/cart')}>Finalizar Compra</Button>
                // {items.title} {items.price}
            ): null
            }

               
            </div>
            
            
           
        </div>
        
                
            )
}





