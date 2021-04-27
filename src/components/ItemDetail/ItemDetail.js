import React from 'react';

// import './ItemDetail.css';

export default function ItemDetail({arrayProducts}) {


    return( 
    
       <div><h2>Descripción del producto</h2>
        <div>
           
            {
             arrayProducts.map((eachItem) => (
            <div key={eachItem.id}>
                
                <p>{eachItem.description}</p>
                <p>{eachItem.details}</p>
                <p>{eachItem.price}</p><br></br>


            </div>
                
            ))
            }
            
            
        </div>
        </div> 
    )
}