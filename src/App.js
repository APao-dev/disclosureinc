import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ListItemContainer from './containers/ListItemContainer/ListItemContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import HomePageContainer from './containers/homePage/HomePageContainer';
import ContactContainer from './containers/Contact/ContactContainer';
import Categories from './components/Categories/Categories';
// import PostPageContainer from './containers/postsPage/PostsPageContainer';
// import { RestaurantMenuRounded } from '@material-ui/icons';





function App() {

    return(
        <div>
            <Router>
            <NavBar/>  
              
            <Switch>
        <Route exact path="/">
         <HomePageContainer/>
         </Route>
              

         <Route path="/posts">
         <ListItemContainer/> 
         </Route>

         <Route path="/contact">
         <ContactContainer/> 
         </Route>

         <Route path="/categories/sweaters">
         <Categories/> 
         </Route>

         <Route path="/item/:id">
         <ItemDetailContainer/>
         </Route>

       </Switch>
       </Router>
        </div>

    )

} 

 export default App;