
import React from 'react';
import './ItemCount.css';
import Button from '@material-ui/core/Button';
export default class ItemCount extends React.Component {
   
    render(){
        return(
            <div className="count">
            <p className="count-number"> {this.props.number}</p>     
            <button className="button-count" onClick={this.props.decrement}> - </button>
            <button className="button-count" onClick={this.props.increment}> + </button> <br></br>

            <Button size="small" color="primary">
            Agregar al carrito
           </Button>
            
            </div>
        )
}  
}