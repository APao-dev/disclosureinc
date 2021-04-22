import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
// import Item from './components/Item/Item';
// import ListItemContainer from './containers/ListItemContainer/ListItemContainer'

import ItemCountContainer from './containers/ItemCountContainer/ItemCountContainer';


function App() {

    return(
        <div>
        <NavBar/>
    
       
        
       <ItemCountContainer/>
        
        </div>
        
    )
} 
// class App extends React.Component {

    


//     render() {   
//         return ( 
          
//             <div>
//             <NavBar/>
        
//             <ListItemContainer />
            
//            <ItemCountContainer/>
            
//             </div>
            
//         );
//     }
// }

 export default App;