import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
// import Visualizer from './components/Visualizer/Visualizer'
// import CartWidget from './components/CartWidget/CartWidget'
import ListItemContainer from './containers/ListItemContainer/ListItemContainer'

import ItemCountContainer from './containers/ItemCountContainer/ItemCountContainer';

class App extends React.Component {

    // constructor(props) {
    //     super(props);
        
    // }


    render() {   
        return ( 
          
            <div>
            <NavBar/>
        
            <ListItemContainer />

           <ItemCountContainer/>
            
            </div>
            
        );
    }
}

export default App;