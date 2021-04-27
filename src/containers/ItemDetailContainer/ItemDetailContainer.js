import React, { useState, useEffect } from "react";
import ItemDetail from '../../components/ItemDetail/ItemDetail';
const {getProducts} = require('../../services/post.service')

export default function ShowItemDetailContainer() {

    const [itemDetail, setItemDetail] = useState([])
    
    useEffect(() => {

        setTimeout(()=> {
            getProducts
            .then(data=>setItemDetail(data))
            .catch(err=>console.log(err))
        }, 2000)

    }, []);

    // const {itemId} = useParams();

    return (
        <div className="itemDetailContainer">
            <ItemDetail arrayProducts={itemDetail}/>
        </div>
    )
}


// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// const { getPostById }= require('../../services/post.service');
// export default function PostDetailContainer() {
//     const { postId }= useParams();
//     const[post, setPost] = useState({title: '', body: ''})

//     useEffect(() => {
//         getPostById(postId)
//         .then(res => setPost(res))
//     },[postId])

//     return(
//         <div>
//         {/* <h1>Título: {postId} </h1> */}
//         <h4></h4>
//         </div>
//     )
// }