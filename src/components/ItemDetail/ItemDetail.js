import React from 'react';
// import './ItemDetail.css';

export default function ItemDetail({item}) {

   
    return( 
    
       <div ><h2>Descripción del producto</h2>
            <div style={{display: "flex"}}>
                        
                <div  key={item.id}>  
                <p>Categoría: {item.categorie}</p>  
                <p>{item.title}</p>
                <p>Detalles: {item.description}</p>                    
                <p>Precio: {item.price}</p><br></br>
            
                </div>
            </div>
        </div>
        
                
            )
}





