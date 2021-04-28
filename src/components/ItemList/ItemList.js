
import React from 'react';
import Item from '../Item/Item';
// import './ItemList.css';

export default function ItemList({ItemData}) {
    return (
        <div style={{display: "flex"}} className="itemlistcontainer">
            
                {
                    ItemData.map((post) => {
                        return(
                            
                            <Item key={post.id} title={post.title} image={post.image} />
                           
                        )
                    })
                }
            
        </div>
    )
}




// const ItemList=[
//     {
//         "id": 1,
//         "title": "Sweater",
//         "description": "Sweater blanco de mujer",
       
//     },

//     {
//         "id": 2,
//         "title": "Abrigadísimo",
//         "description": "Otro sweater para este invierno",
      
//     },

//     {
//         "id": 3,
//         "title": "Sweater para la noche",
//         "description": "Sweater negro de mujer",
      
//     },
//     {
//         "id": 4,
//         "title": "Sweater colorido",
//         "description": "Ideal de día",
       
//     }
// ]
// module.exports={
//     ItemList
// }