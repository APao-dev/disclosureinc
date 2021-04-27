import React, { useState, useEffect } from 'react';

import Item from '../../components/Item/Item';
import ItemList from "../../components/ItemList/ItemList";


export default function ItemListContainer() {

    const[item, setItem] = useState([])

    useEffect(() => {
        setTimeout(() => {
        setItem(ItemList)
        
            
        },2000)
        
    }, []);

    return(
        <div style={{display: "flex"}}>
            {
                item.map(singleItem => (
                    <Item title={singleItem.title} description={singleItem.description}/>
                ))
            }
        </div>
    )

}