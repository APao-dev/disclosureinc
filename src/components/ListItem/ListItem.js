import React from 'react';
// import NavBar from './components/NavBar/NavBar';
// import CartWidget from './components/CartWidget/CartWidget';
import './ListItem.css';

export default function ListItemContainer(props) {

  
    return (
        
            <div className="container">
                <h1>Bienvenido/a</h1>
            <form className="container-form">
                <input onChange={props.InputChange} className="container-form__input" name="productoInput" type="text" placeholder="Ingrese un producto de su interés"/>
                <button className="container-form__button">Buscar</button>
            </form>
                
            </div>          
      
    )


    }

