import React, { useState, useEffect } from 'react';

// import Item from '../../components/Item/Item';
import ItemList from "../../components/ItemList/ItemList";


export default function ItemListContainer() {

    const[item, setItem] = useState([])

    useEffect(() => {
        setTimeout(() => {
            fetch('https://raw.githubusercontent.com/APao-dev/disclosureinc/main/src/components/Item/Item.json')
            .then(response => response.json())           
            .then((data) => {
                setItem(data)
            })        
            
        },2000)
        
    }, []);

    return(
        <div>
            {
               <div style={{display: "flex"}}>
                    <ItemList ItemData={item}/>
                </div>
            }
        </div>
    )

}