
import db from '../firebase';


const itemCollection = db.collection('items');

export function getProducts() {
    return itemCollection.get()
      .then(snapShot => {
          return snapShot.docs.map(doc => ({...doc.data(), id: doc.id}))
      })  
     

}

export function getProductsById(productId) {
    const itemById = itemCollection.doc(productId)
    return itemById.get()
    .then(snapShot => {
        return ({...snapShot.data(), id: snapShot.id})
    })

}

// {

//     fetch('https://raw.githubusercontent.com/APao-dev/disclosureinc/main/src/components/Item/Item.json')
//     .then(response => response.json())
//     .then(data => resolve(data))
//     .catch(err => reject(err))
// })

// module.exports ={
//     getProducts
// }




//GET//
// function getPosts(quantity) {
//     return new Promise ((resolve, reject) => {
//         fetch(`https://jsonplaceholder.typicode.com/posts?_page=1&_limit=${quantity}`)
//         .then(res => res.json())
//         .then(data => resolve(data))
//         .then(err => reject(err))
//     })
// }


// POST//
// function createPost(post) {
//     return new Promise((resolve, reject) => {
//         fetch(`https://jsonplaceholder.typicode.com/posts`, {
//             method: 'POST',
//             body: JSON.stringify({
//                 userId: post.userId,
//                 title: post.title,
//                 body: post.body
//             }),
//             headers: {
//                 'Content-type': 'application/json: charset=UTF-8'
//             }
//         })
//         .then(res => res.json())
//         .then(data => resolve(data))
//         .catch(err => reject(err))

//     })
// }


//UPDATE//
// function updatePost(data) {
   // fetch(`https://jsonplaceholder.typicode.com/posts/${data.postId}`, {
//             method: 'PUT',
//             body: JSON.stringify({
//                 userId: post.userId,
//                 title: post.title,
//                 body: post.body
//             }),
//             headers: {
//                 'Content-type': 'application/json: charset=UTF-8'
//             }
//         })
//         .then(res => res.json())
//         .then(data => resolve(data))
//         .catch(err => reject(err))
    // })

// }


//PATCH//
// function patchPost(data) {

// }


//DELETE//
// function deletePost(id){
    //fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        //method:'DELETE'
    // })
    // .then(res => res.json())
    // .then(data => resolve(data))
    // .catch(err => reject(err))

// }

// module.exports = {
//     createPost,
//     updatePost,
//     getPosts,
//     patchPost,
//     deletePost,
// }