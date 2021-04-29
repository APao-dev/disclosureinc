import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Img from '../../assets/img/sw6.jpeg';
import ItemCountContainer from '../../containers/ItemCountContainer/ItemCountContainer';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 20,
       
  },
  media: {
    width: 250,  
    height: 300,
    padding: 20,
    margin: 10,
   
  },
});

export default function MediaCard({title, description, image, id, handleClick}) {
  
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Img}
          title={title}
          description={description}

        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
      
        <ItemCountContainer/>
        <Button onClick={() => handleClick(id)} style={{padding:"18px", color:"#ffc7c7", border:"#8785a2 solid 1px"}}>Ver más</Button>
       
      </CardActions>
      
    </Card>
  );
}
