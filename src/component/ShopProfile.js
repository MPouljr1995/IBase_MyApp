import React, { Component } from 'react';

import {Grid,Paper,Card,CardContent,Typography,Button, CardActions} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Rating from '@material-ui/lab/Rating';
// import Box from '@material-ui/core/Box';


import Photo from '/home/ukistu07/Desktop/Project_Final/PROJECT_ FILE/REACT/ibaseshop1/src/components/images/bacgroung.png'

const style = {
    Paper1: {
      backgroundColor:'#5c6bc0',
      marginTop: 10,
      height: 400
    },
    Paper2: {
        backgroundColor:'#5c6bc0',
        marginTop: 10,
        height: 400
      }
}

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 100,
    },
    media1: {
        height: 300,
      },
  });


// class ShopProfile extends Component {
function ShopProfile() {

    const classes = useStyles();

    const [value, setValue] = React.useState(2);

    // render(){
        return(
            <Grid container spacing={3}>
                <Grid item xs={12}>
                <Paper style = {style.Paper1}>
                    <Card>
                            <CardActionArea>
                                {/* <CardMedia
                                    className={classes.media1}
                                    image="/src/bacgroung.jpeg"
                                    title="Contemplative Reptile"
                                /> */}
                                <CardMedia>
                                    <img src= {Photo} alt="Logo" height="300px" width="900px"/>
                                </CardMedia>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        SHOP NAME
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                    ShopShop Shop ShopShopShopShop Shop........
                                    </Typography> 

                                    <Rating name="read-only" value={value} readOnly />
                                    
                                </CardContent>
                            </CardActionArea>
                            
                        </Card>
                </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper style = {style.Paper2}>
                        <Card>
                            <CardActionArea>
                                {/* <CardMedia
                                    className={classes.media}
                                    image="./images/bacgroung.png"
                                    title="Contemplative Reptile"
                                /> */}
                                <CardMedia>
                                    <img src= {Photo}  alt="Logo" height="200px" width="300px"  />
                                </CardMedia>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        THINS NAME
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                    ShopShop Shop ShopShopShopShop Shop........
                                    </Typography> <br/>
                                    <Typography variant="h5" component="h4">
                                        Rs 5000/=
                                    </Typography>

                                    <Rating name="read-only" value={value} readOnly />

                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                Buy
                                </Button>
                                <Button size="small" color="primary">
                                Add Card
                                </Button>
                            </CardActions>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper style = {style.Paper2}>
                    <Card>
                            <CardActionArea>
                                {/* <CardMedia
                                    className={classes.media}
                                    image="/src/bacgroung.jpeg"
                                    title="Contemplative Reptile"
                                /> */}
                                <CardMedia>
                                    <img src= {Photo} alt="Logo" height="200px" width="300px"/>
                                </CardMedia>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        THINS NAME
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                    ShopShop Shop ShopShopShopShop Shop........
                                    </Typography> <br/>
                                    <Typography variant="h5" component="h4">
                                        Rs 5000/=
                                    </Typography>
                                    
                                    <Rating name="read-only" value={value} readOnly />

                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                Buy
                                </Button>
                                <Button size="small" color="primary">
                                Add Card
                                </Button>
                            </CardActions>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper style = {style.Paper2}>
                    <Card>
                            <CardActionArea>
                                {/* <CardMedia
                                    className={classes.media}
                                    image="/src/bacgroung.jpeg"
                                    title="Contemplative Reptile"
                                /> */}
                                <CardMedia>
                                    <img src= {Photo} alt="Logo" height="200px" width="300px"/>
                                </CardMedia>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        THINS NAME
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                    ShopShop Shop ShopShopShopShop Shop........
                                    </Typography> <br/>
                                    <Typography variant="h5" component="h4">
                                        Rs 5000/=
                                    </Typography>

                                    <Rating name="read-only" value={value} readOnly />

                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                Buy
                                </Button>
                                <Button size="small" color="primary">
                                Add Card
                                </Button>
                            </CardActions>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper style = {style.Paper2}>
                    <Card>
                            <CardActionArea>
                                {/* <CardMedia
                                    className={classes.media}
                                    image="/src/bacgroung.jpeg"
                                    title="Contemplative Reptile"
                                /> */}
                                <CardMedia>
                                    <img src= {Photo} alt="Logo" height="200px" width="300px"/>
                                </CardMedia>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        THINS NAME
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                    ShopShop Shop ShopShopShopShop Shop........
                                    </Typography> <br/>
                                    <Typography variant="h5" component="h4">
                                        Rs 5000/=
                                    </Typography>

                                    <Rating name="read-only" value={value} readOnly />

                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                Buy
                                </Button>
                                <Button size="small" color="primary">
                                Add Card
                                </Button>
                            </CardActions>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper style = {style.Paper2}>
                    <Card>
                            <CardActionArea>
                                <CardMedia>
                                    <img src= {Photo} alt="Logo" height="200px" width="300px"/>
                                </CardMedia>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        THINS NAME
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                    ShopShop Shop ShopShopShopShop Shop........
                                    </Typography> <br/>
                                    <Typography variant="h5" component="h4">
                                        Rs 5000/=
                                    </Typography>

                                    {/* <Box component="fieldset" mb={3} borderColor="transparent"> */}
                                        <Rating name="read-only" value={value} readOnly />
                                    {/* </Box> */}
                                    
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="medium" color="primary">
                                BUY
                                </Button>
                                <Button size="small" color="primary">
                                Add Card
                                </Button>
                            </CardActions>
                        </Card>
                    </Paper>
                </Grid>
            </Grid>
        )
    }


// }
export default ShopProfile;