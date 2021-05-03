
import React from 'react';
import './ItemCount.css';
import Button from '@material-ui/core/Button';


export default function ItemCount({number, decrement, increment, onAdd}) {
    
    
        return(
            <div className="count">
            <p className="count-number"> {number}</p>     
            <button className="button-count" onClick={decrement}> - </button>
            <button className="button-count" onClick={increment}> + </button> <br></br>

            {
        number > 0 && 
            <Button onClick={onAdd} size="small" color="primary">
            Agregar al carrito</Button>
           
            }
             </div>
        )
         
}

