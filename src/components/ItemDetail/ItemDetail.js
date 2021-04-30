import React from 'react';
// import './ItemDetail.css';

export default function ItemDetail({item}) {

   
    return( 
    
       <div><h2>Descripción del producto</h2>
            <div style={{display: "flex"}}>
                        
                <div key={item.id}>
        
                <p>{item.title}</p>
                <p>{item.description}</p>                    
                <p>{item.price}</p><br></br>
            
                </div>
            </div>
        </div>
        
                
            )
}





