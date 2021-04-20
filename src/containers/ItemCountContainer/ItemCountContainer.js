import React, { useState, useEffect } from 'react';
import ItemCount from '../../components/ItemCount/ItemCount';



export default function ItemCountContainer(props){

    const[number, setNumber] = useState(0);

    useEffect(() => {
        console.log('ComponentDidMount desde useEffect');
    }, [number]);


    function onIncrement() {
        setNumber(number + 1);
    }

    function onDecrement() {
        setNumber(number - 1);
    }
   

   
         
        return(
            <div>
             {
                 number < 5 ? <ItemCount number={number} increment={onIncrement} decrement={onDecrement}/> :null
             }
               

            </div>
        )
}

