import React, { useState, useEffect } from "react";
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';


const {getProducts} = require('../../services/post.service');


export default function ItemDetailContainer() {
    
   
    
    const [itemDetail, setItemDetail] = useState([])
    const {id} = useParams()
    

    useEffect(() => {
        
            getProducts
            // filtrar
            .then(data=> {
                const idPars = parseInt(id)
                const filtro = data.filter(item => item.id === idPars)
                setItemDetail(filtro[0]) 
                console.log(filtro)
            }
            )
        
    }, );



    return (
        <div  className="itemDetailContainer">
            <ItemDetail item={itemDetail}/>
          
        </div>
    )
}



