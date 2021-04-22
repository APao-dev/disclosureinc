
import React from 'react';
import './ItemCount.css'

export default class ItemCount extends React.Component {
   
    render(){
        return(
            <div>
            <p>Cantidad del producto: {this.props.number}</p>     
            <button className="button-count" onClick={this.props.decrement}> - </button>
            <button className="button-count" onClick={this.props.increment}> + </button> <br></br>

            <button className="button-add">Agregar al carrito</button>
            
            
            </div>
        )
}  
}