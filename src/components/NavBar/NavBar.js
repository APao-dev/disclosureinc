import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// Para la lista desplegable con las opciones
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

// Intentando agregar la cartWidget al navBar
// Icono carrito

import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
// import CartWidget from './components/CartWidget/CartWidget';
// Importando el CSS
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


  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    
    <div className={classes.root}>
     
      <AppBar position="static" >
        
        <Toolbar>
          
                
          <Typography variant="h3" className={classes.title}>
            DisclosureInc
          </Typography>
         
          <ShoppingCartOutlinedIcon  className="shopping-car"/> 
         
          <div>
        <Button className="boton-menu" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button>
          <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >   
      <MenuItem onClick={handleClose}>Productos</MenuItem>
      <MenuItem onClick={handleClose}>Servicios</MenuItem>
      <MenuItem onClick={handleClose}>Sobre Nosotros</MenuItem></Menu>
         
    </div>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
  }
