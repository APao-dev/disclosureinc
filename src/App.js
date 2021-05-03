import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ListPostsContainer from './containers/ListPostsContainer/ListPostscontainer';
import ListItemContainer from './containers/ListItemContainer/ListItemContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import HomePageContainer from './containers/homePage/HomePageContainer';
import ContactContainer from './containers/Contact/ContactContainer';
import CartContainer from './containers/CartContainer/CartContainer';



function App() {

    return(
        <div>
            <Router>
            <NavBar/>  
              
            <Switch>
        <Route exact path="/">
         <HomePageContainer/>
         </Route>
              

         <Route exact path="/posts">
         <ListPostsContainer/>       
         </Route>

         <Route path="/posts/:categoryId">  
         <ListItemContainer/> 
         </Route>

         <Route path="/contact">
         <ContactContainer/> 
         </Route>

        
         <Route path="/item/:id">
         <ItemDetailContainer/>
         </Route>

         <Route path="/cart">
         <CartContainer/> 
         </Route>

       </Switch>
       </Router>
        </div>

    )

} 

 export default App;