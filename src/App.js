import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
// import Visualizer from './components/Visualizer/Visualizer'
// import CartWidget from './components/CartWidget/CartWidget'
import ListItemContainer from './components/ListItemContainer/ListItemContainer'

class App extends React.Component {

    // constructor(props) {
    //     super(props);
        
    // }


    render() {   
        return ( 
          
            <div>
            <NavBar/>
        
            <ListItemContainer />
            
            </div>
            
        );
    }
}

export default App;