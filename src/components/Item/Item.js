import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import img from '../../assets/img/sw6.jpeg';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 340,
    margin: 20,    
       
  },
  media: {
    width: 250,  
    height: 300,
    padding: 20,
    margin: 10,
   
  },
});

export default function MediaCard({title, subtitle, description, image, category, price, id}) {
  
  const classes = useStyles();
  const history =useHistory();

  return (

    <div className="space-item" >
      
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media} 
          image={img}
         

        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="h2">
            {category}
           <p style={{fontSize:"25px", color:"plum", fontFamily:"cursive"}}>{title}</p>
           <p style={{fontSize:"15px"}}>{subtitle}</p>           
           <p>$ {price}</p>
          </Typography>
         
          <Typography variant="body2" color="textSecondary" component="p">
          
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        
        <Button onClick={() => history.push(`/item/${id}`)} style={{padding:"14px", marginLeft:"23px", marginRight:"23px", color:"#ffc7c7", border:"#8785a2 solid 1px"}}>Ver más</Button>
       
        <Button onClick={() => history.push(`/item/${id}`)} style={{padding:"14px", marginLeft:"23px", marginRight:"23px", color:"#ffc7c7", border:"#8785a2 solid 1px"}}>Comprar</Button>
      </CardActions>
      
    </Card>
    </div>
  
  );
}
