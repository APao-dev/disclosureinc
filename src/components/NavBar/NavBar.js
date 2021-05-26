
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// Para la lista desplegable con las opciones
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import './NavBar.css'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const history =useHistory();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    
    <div className={classes.root} >
     
      <AppBar position="static" >
        
        <Toolbar className="navbar-style">
          
                
          <Typography variant="h3" className={classes.title} >
            <Link to="/" className="title-disclo">DisclosureInc</Link>
          </Typography>

          <div className={classes.categories}>
    <Button onClick={() => history.push('/posts/sweaters')} color="inherit"  style={{padding:'30px'}}>Sweaters</Button>
    <Button onClick={() => history.push('/posts/calzado')} color="inherit" style={{padding:'30px'}}>Calzado</Button>
    <Button onClick={() => history.push('/posts/accesorios')} color="inherit"  style={{padding:'30px'}}>Accesorios</Button>
  </div>

          <CartWidget/>
         
    <Link className="title-disclo"
            to="/contact" style={{margin:"20px"}}>NOSOTROS</Link> 
    
   
          
        </Toolbar>
      </AppBar>
    </div>
  );
  }
