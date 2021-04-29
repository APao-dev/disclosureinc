// import React from 'react';
// import './ItemDetail.css';

// export default function ItemDetail({item}) {


//     return( 
    
//        <div><h2>Descripción del producto</h2>
//             <div style={{display: "flex"}}>
                        
//                 <div key={item.id}>
                
//                     <p>{item.description}</p>
//                     <p>{item.details}</p>
//                     <p>{item.price}</p><br></br>
            
//                 </div>
//             </div>
//         </div>
        
                
//             )
// }




import React,{ useEffect, useState } from 'react';
export default function ItemDetail(){
    
    const[product, setItem] = useState([])
    const[title, setTitle] = useState([])
    const[description, setDescription] =useState([])
    const [image, setImage] = useState([])
    const [price, setPrice] = useState([])



 useEffect(() => {
    fetch('https://raw.githubusercontent.com/APao-dev/disclosureinc/main/src/components/Item/Item.json')
    
    .then(response => response.json())           
    .then((data) => {
        setItem(data)
    },2000)        

}, []);

return( 
    
    <div><h2>Descripción del producto</h2>
         <div style={{display: "flex"}}>
                     
             <div key={product.id}>
                 <p>{product.description}</p>
                 <p>{product.price}</p><br></br>
         
             </div>
         </div>
     </div>
     
             
    )
}