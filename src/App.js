import React from 'react';
import AppRouter from './containers/AppRouter/AppRouter';
import './App.css';
import { CartProvider } from './context/CartContext';

function App() {
    return (
        
        <CartProvider>
        <AppRouter />
        </CartProvider>
    );
    
}
export default App;