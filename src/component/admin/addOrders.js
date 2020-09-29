import React, { Component } from 'react'
import { Card, CardContent, Grid, FormControl, TextField, Input, FormHelperText, OutlinedInput ,Select } from '@material-ui/core';
import { Paper, Typography, AppBar, Toolbar, Button, IconButton ,Divider,Box } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';

import ApiService from "../../ApiService";



import AddBox from '@material-ui/icons/AddBox';




import '../css/editOrder.css';

const style ={
  float:'right',
  marginRight:'50px',
  marginTop:'30px',
}

class EditOrder extends Component {

    constructor(props){
        super(props);
        this.state ={
          id:'',
          username:'',
          productId: '',
          time:'',
          date:'',
          price:'',
          quantity:'',
          email:'',
          phone:'',
          address:'',
        }
        // this.saveUser = this.saveUser.bind(this);
        // this.loadUser = this.loadUser.bind(this);
    }

    componentDidMount() {
        this.loadUser();
    }

    loadUser = () => {
        ApiService.getOrderById(window.localStorage.getItem("orderId"))
            .then((res) => {
                let order = res.data;
                this.setState({
                    id:order.id,
                    username:order.username,
                    productId: order.productId,
                    time:order.time,
                    date:order.date,
                    price:order.price,
                    quantity:order.quantity,
                    email:order.email,
                    phone:order.phone,
                    address:order.address,
                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    AddOrder = (e) => {
        e.preventDefault();
        let order = {
          id: this.state.id,
          username: this.state.username,
          productId: this.state.productId,
          time: this.state.time,
          date: this.state.date,
          price: this.state.price,
          quantity: this.state.quantity,
          email: this.state.email,
          phone:this.state.phone,
          address: this.state.address
        };
        ApiService.addOrder(order)
            .then(res => {
                this.setState({message : 'User added successfully.'});
                this.props.history.push('/orderDetails');
            });
    }

    render() {

        return (
            <div>
            <Paper className='orderEditeWarraper' elevation={1}>
              <Typography id="profileHeading">Add Order</Typography>
                <Grid container id="profileGrid">



                      <Grid item xs={12} sm={12} md={6}>
                        <Paper id="userNameDiv" elevation={3}>
                            <Typography variant="h6" id="userNameDivTitle">User name</Typography>
                            <FormControl variant="outlined" id='firstNameIp'>
                                <InputLabel htmlFor="component-outlined">User name</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={this.state.username}
                                    onChange={this.onChange}
                                    label="User name"
                                    name="username"
                                />
                            </FormControl>
                        </Paper>
                      </Grid>


                      <Grid item xs={12} sm={12} md={6}>
                        <Paper id="firstNameDiv" elevation={3}>
                            <Box id="firstNamebox">
                              <Typography variant="h6" id="firstNameDivTitle">Product Id</Typography>

                                  <FormControl variant="outlined" id='firstNameIp'>
                                      <InputLabel htmlFor="component-outlined">Product Id</InputLabel>
                                      <OutlinedInput
                                          id="component-outlined"
                                          value={this.state.productId}
                                          onChange={this.onChange}
                                          label="Product Id"
                                          name="productId"
                                      />
                                  </FormControl>
                            </Box>
                        </Paper>
                      </Grid>



                      <Grid item xs={12} sm={12} md={6}>
                        <Paper id="lastNameDiv" elevation={3}>
                            <Box id="lastNamebox">
                                <Typography variant="h6" id="lastNameDivTitle">Price</Typography>
                                    <FormControl variant="outlined" id='proLastNameIp'>
                                        <InputLabel htmlFor="component-outlined">Price</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            value={this.state.price}
                                            onChange={this.onChange}
                                            label="Price"
                                            name="price"
                                            type='number'
                                        />
                                    </FormControl>
                            </Box>
                        </Paper>
                      </Grid>



                      <Grid item xs={12} sm={12} md={6}>
                        <Paper id="emailDiv" elevation={3}>
                            <Box id="emailbox">
                                <Typography variant="h6" id="emailDivTitle">Quantity</Typography>
                                    <FormControl variant="outlined" id='emailIp'>
                                        <InputLabel htmlFor="component-outlined">quantity</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            value={this.state.quantity}
                                            onChange={this.onChange}
                                            label="quantity"
                                            type='number'
                                            name="quantity"
                                        />
                                    </FormControl>
                            </Box>
                        </Paper>
                      </Grid>



                      <Grid item xs={12} sm={12} md={6}>

                        <Paper id="emailDiv" elevation={3}>
                            <Box id="emailbox">
                                <Typography variant="h6" id="emailDivTitle">Email</Typography>
                                    <FormControl variant="outlined" id='emailIp'>
                                        <InputLabel htmlFor="component-outlined">Email</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            value={this.state.email}
                                            onChange={this.onChange}
                                            label="Email"
                                            name="email"
                                        />
                                    </FormControl>
                            </Box>
                        </Paper>

                      </Grid>



                      <Grid item xs={12} sm={12} md={6}>

                        <Paper id="phoneDiv" elevation={3}>
                            <Box id="phonebox">
                                <Typography variant="h6" id="lastNameDivTitle">Phone Number</Typography>

                                    <FormControl variant="outlined" id='emailIp'>
                                        <InputLabel htmlFor="component-outlined">Phone</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            value={this.state.phone}
                                            onChange={this.onChange}
                                            label="Phone"
                                            type="Number"
                                            name="phone"
                                        />
                                    </FormControl>

                            </Box>



                        </Paper>

                      </Grid>



                      <Grid item xs={12} sm={12} md={6}>

                        <Paper id="addressDiv" elevation={3}>
                            <Box id="addressbox">
                                <Typography variant="h6" id="lastNameDivTitle">Address</Typography>

                                    <FormControl variant="outlined" id='emailIp'>
                                        <InputLabel htmlFor="component-outlined">Address</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            value={this.state.address}
                                            onChange={this.onChange}
                                            label="Address"
                                            name="address"
                                        />
                                    </FormControl>
                            </Box>
                        </Paper>
                      </Grid>



                      <Grid item xs={12} sm={12} >
                          <Box style={style}>
                            <Button onClick={this.AddOrder} style={{backgroundColor:'white',fontWeight:'bold',backgroundColor:'#03a9f4',color:'white'}}><AddBox style={{marginRight:'5px'}}/>Add Order</Button>
                          </Box>
                      </Grid>







                </Grid>


            </Paper>
            </div>
        );
    }
}

export default EditOrder;
