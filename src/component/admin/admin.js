import React,{Component} from 'react';
import { Card, CardContent, Grid, FormControl, TextField, Input, FormHelperText, OutlinedInput ,Select ,CardActionArea } from '@material-ui/core';
import { Paper, Typography, AppBar, Toolbar, Button, IconButton ,Divider,Box } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';

import User from '../images/user.png';
import Shop from '../images/shop.png';
import Order from '../images/order.png';




import './../css/admin.css';

class Admin extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <div id="adminMainDiv">
          <Grid container spacing={5}>
              <Grid item xs={12} sm={12} md={6}>
                  <Card id="shopDetailsDiv">
                    <CardActionArea style={{width:'100%',height:'100%',}} href="/shopDetails">
                      <Typography variant="h4" id="shopDetailsTitle">Shop Details</Typography>
                      <img src={Shop} style={{height:'220px',display:'flex',margin:'auto',marginTop:'15px'}} />
                    </CardActionArea>
                  </Card>
              </Grid>



              <Grid item xs={12} sm={12} md={6}>
                  <Paper id="userDetailsDiv">
                    <CardActionArea style={{width:'100%',height:'100%',}} href="/userDetails">
                      <Typography variant="h4" id="userDetailsTitle">User Details</Typography>
                      <img src={User} style={{height:'250px'}} />
                    </CardActionArea>
                  </Paper>
              </Grid>

              <Grid item xs={12} sm={12} md={6}>
                  <Paper id="productDetailsDiv">
                    <CardActionArea style={{width:'100%',height:'100%',}} href="/productDetails">
                      <Typography variant="h4" id="productDetailsTitle">Product Details</Typography>
                    </CardActionArea>
                  </Paper>
              </Grid>

              <Grid item xs={12} sm={12} md={6}>
                  <Paper id="orderDetailsDiv">
                    <CardActionArea style={{width:'100%',height:'100%',}} href="/orderDetails">
                      <Typography variant="h4" id="orderDetailsTitle">Order Details</Typography>
                      <img src={Order} style={{height:'220px',display:'flex',margin:'auto',marginTop:'15px'}} />
                    </CardActionArea>
                  </Paper>
              </Grid>
          </Grid>
      </div>
    )
  }
}
export default Admin;
