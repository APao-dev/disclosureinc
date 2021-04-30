
import React from 'react';
import Item from '../Item/Item';
// import './ItemList.css';

export default function ItemList({ItemData}) {
    return (
        <div style={{display: "flex"}} className="itemlistcontainer">
            
                {
                    ItemData.map((post) => {
                        return(
                            
                            <Item key={post.id} categorie={post.categorie}  title={post.title} description={post.description} image={post.image} />
                           
                        )
                    })
                }
            
        </div>
    )
}
