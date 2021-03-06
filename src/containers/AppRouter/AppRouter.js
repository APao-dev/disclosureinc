import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import ListPostsContainer from '../ListPostsContainer/ListPostscontainer';
import ListItemContainer from '../ListItemContainer/ListItemContainer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import HomePageContainer from '../homePage/HomePageContainer';
import ContactContainer from '../Contact/ContactContainer';
import CartContainer from '../CartContainer/CartContainer';
import Login from '../../components/Login/Login';
import Footer from '../../components/Footer/Footer';

function App() {

    return(
    
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


         <Route path="/login">
         <Login/> 
         </Route>

         <Route path="/cart">
         <CartContainer/> 
         </Route>

       </Switch>
       <Footer/>
       </Router>
       

    )

} 

 export default App;