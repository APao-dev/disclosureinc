import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  categories: {
    display: 'flex',
    width: '300px',
    marginLeft: '20px',
    justifyContent: 'space-between'
  },

  grow: {
    flexGrow: 1,
  },
}));

export default function Categories() {

  const classes = useStyles();
  const history = useHistory();

  return(
    <div className={classes.categories}>
    <Button onClick={() => history.push("/categories/sweaters")} color="inherit">Sweaters</Button>
    <Button color="inherit">Calzado</Button>
    <Button color="inherit">Accesorios</Button>
  </div>
  )
 
}