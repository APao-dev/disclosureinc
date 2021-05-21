import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import img from '../../assets/img/sw6.jpeg';
// import ItemCountContainer from '../../containers/ItemCountContainer/ItemCountContainer';
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
<Fragment>
    <div className="space-item">
      
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
          title={title}
        
          description={description}
          category={category}

        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {category}
           {title}<br></br>
           {subtitle}
           
           
           
          </Typography>
         
          <Typography variant="body2" color="textSecondary" component="p">
           
           {price}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        
      
        {/* <ItemCountContainer/> */}
        <Button onClick={() => history.push(`/item/${id}`)} style={{padding:"14px", color:"#ffc7c7", border:"#8785a2 solid 1px"}}>Ver más</Button>
       
      </CardActions>
      
    </Card>
    </div>
    </Fragment>
  );
}
