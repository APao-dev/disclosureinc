import React, { useState, useEffect } from 'react';
import ItemCount from '../../components/ItemCount/ItemCount';


export default function ItemCountContainer(){

    const[number, setNumber] = useState(0);

    useEffect(() => {
        console.log('ComponentDidMount desde useEffect');
    }, [number]);


    function onIncrement() {
        if(number < 5){
          setNumber(number + 1);  
        }else{
            alert('No hay más stock')
        }
        
    }

    function onDecrement() {
        if(number > 1){
         setNumber(number - 1);   
        }else{
            alert('Debes agregar un item')
        }
        
        
    }
   

   
         
        return(
            <div style={{}}>
                
                <ItemCount number={number} increment={onIncrement} decrement={onDecrement}/> 
            
            
            </div>
        )
}

