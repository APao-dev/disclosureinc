import React from 'react';
import './App.css';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ListItemContainer from './containers/ListItemContainer/ListItemContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
// import HomePageContainer from './containers/homePage/HomePageContainer';
// import PostPageContainer from './containers/postsPage/PostsPageContainer';
// import ServicesPageContainer from './containers/servicesPage/ServicesPageContainer';
// import { RestaurantMenuRounded } from '@material-ui/icons';





function App() {

    return(
        <div>
            <NavBar/>  
            <ListItemContainer/>   
            <ItemDetailContainer/>
        </div>

    )

//     return(
//         <Router>
//         <Container disableGutters maxWidth={false}>
//         <CssBaseline/>
//          <NavBar/>  
//         <ListItemContainer/>   
//         </Container>
        
//       <Switch>
//         <Route exact path="/">
//         <HomePageContainer/>
//         </Route>
              
          
//         <Route exact path="/posts/postId">
//         <PostDetailContainer />
//         </Route>

//         <Route path="/services">
//         <ServicesPageContainer/>
//         </Route>

//       </Switch>
        
       
//         </Router>
//     )
} 

 export default App;