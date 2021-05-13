
import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';

export default function ItemList({ItemData}) {
    return (
        <div  className="itemlistcontainer">
            
                {
                    ItemData.map((post) => {
                        return(

                            
                            <div>
    
  
                            <Item  key={post.id}  title={post.title} 
                            description={post.description} image={post.image} id={post.id}/>
                            </div>
                        )
                    })
                }
            
        </div>
    )
}
