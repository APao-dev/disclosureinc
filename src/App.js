import React from 'react';
import AppRouter from './containers/AppRouter/AppRouter';
import './App.css';
import  CartProvider  from './context/CartProvider';

function App() {
    return (
        
        <CartProvider>
        <AppRouter />
        </CartProvider>
    );
    
}
export default App;



// const { cart, cantTotal } = useContext(CartContext);

//     return(
//         <div>
//             { cart.length === 0 ?
//         <Link to= '/cart'>
        
//             <ShoppingCartOutlinedIcon  id="shopping-cart" style={{width:"30px",  height:"50px"}}/> 
//         </ Link>
//         :  
//         <Link to='/cart'>
//              <ShoppingCartOutlinedIcon  id="shopping-cart" style={{width:"30px",  height:"50px"}}/> 
//              { cantTotal ? <span>{cantTotal}</span> :null}
//         </Link>   
//         }      
//         </div>
    
//     )
// }

