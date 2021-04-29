import React, { useState, useEffect } from "react";
import ItemDetail from '../../components/ItemDetail/ItemDetail';
const {getProducts} = require('../../services/post.service')

export default function ShowItemDetailContainer() {

    const [itemDetail, setItemDetail] = useState([])
    
    useEffect(() => {

        setTimeout(()=> {
            getProducts
            .then(data=>setItemDetail(data))
           
        }, 2000)

    }, []);

    return (
        <div  className="itemDetailContainer">
            <ItemDetail item={itemDetail}/>
        </div>
    )
}



// export default function ShowItemDetailContainer() {

//     const [itemDetail, setItemDetail] = useState([])
    
//     useEffect(() => {

//         setTimeout(()=> {
//             getProducts
//             .then(data=>setItemDetail(data))
           
//         }, 2000)

//     }, []);

//     return (
//         <div  className="itemDetailContainer">
//             <ItemDetail item={itemDetail}/>
//         </div>
//     )
// }


