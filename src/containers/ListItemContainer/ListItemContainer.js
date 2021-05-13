import React, { useState, useEffect } from 'react';
import ItemList from "../../components/ItemList/ItemList";
import { Link } from 'react-router-dom';

const {getProducts} = require('../../services/post.service');

export default function ItemListContainer() {

    const[item, setItem] = useState([])
    

    useEffect(() => {
        getProducts                      
            .then(data => setItem(data))       
        
    },[] );

    return(
        <div>
            <div>
                <Link to='/posts'></Link>
            </div>
            
               <div style={{display: "flex"}}>
                    <ItemList ItemData={item}/>
                </div>
            
        </div>
    )

}


