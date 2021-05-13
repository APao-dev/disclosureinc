import React, { useState, useEffect } from "react";
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';


const {getProductsById} = require('../../services/post.service');

export default function ItemDetailContainer() {
    
   
    
    const [itemDetail, setItemDetail] = useState([])
    const {id} = useParams()
    

    useEffect(() => {
        
            getProductsById(id)
            // filtrar
            .then(data=> {
                const idPars = parseInt(id)
                const filtro = data.filter(item => item.id === idPars)
                setItemDetail(filtro[0]) 
                console.log(filtro)
            }
            )
        
    },[id] );



    return (
        <div  className="itemDetailContainer">
            <ItemDetail item={itemDetail}/>
          
        </div>
    )
}



