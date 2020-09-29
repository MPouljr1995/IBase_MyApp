import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Paper, Typography, AppBar, Toolbar, Button, IconButton } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import Ibaseshop from './ibaseshopLogo.png';

import { makeStyles } from '@material-ui/core/styles';

import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';


import { Card, CardContent, Grid,  TextField } from '@material-ui/core';


import Home from './component/home';
import Footer from './component/footer';
import Profile from './component/profile';
import Search from './component/search';
import Product from './component/product';
import AddItem from './component/additem';
import SignIn from './component/signIn';
import CreateShop from './component/createShop';


import Admin from './component/admin/admin';
import ShopDetails from './component/admin/shopDetails';
import AdminShopEdite from './component/admin/adminShopEdite';
import UserDetails from './component/admin/userDetails';
import EditUser from './component/admin/editUser';
import ProductDetails from './component/admin/productDetails';
import EditProduct from './component/admin/editProduct';
import OrderDetails from './component/admin/orderDetails';
import EditOrder from './component/admin/editOrder';
import AddOrder from './component/admin/addOrders';








//import PicUploadNoCrop from './component/imgCrop';





class App extends Component {


  constructor(props){
    super(props);
    this.state = {
      search:'',
      locationSelectDiv:'show',
      currentUser: undefined,
      logIn:false,

    };
  }

  componentDidMount(){
    let user;
    if (localStorage.getItem('username')) {
      user = {
        username: localStorage.getItem('username'),
        id: localStorage.getItem('id'),
        email: localStorage.getItem('email'),
        roles: localStorage.getItem('roles'),
      };



      this.setState({
        currentUser: user,
        logIn:true,
        //showAdminBoard: user.roles.includes("ROLE_ADMIN")
      });
    }
  };





  onChangeSearch = (e) =>{
    this.setState({
      search:e.target.value,
    })
  }


  logOut = () => {
      localStorage.clear();
      window.location.href='./';
      //window.location.reload();
    }



  render() {
      const { currentUser } = this.state;


    return (
      <Router>
          <div className="App">



            <AppBar position="static" className='App-AppBar' style={{backgroundColor:'#03a9f4', color:'white'}}>
              <Toolbar>
                <IconButton edge="start"   color="inherit" aria-label="menu">
                    <MenuIcon style={{fontSize:'40px'}} />
                </IconButton>
                  <Button href="/" className='App-LogoDiv'><img src={Ibaseshop} style={{width:'50px',color:'white'}}/><strong style={{fontSize:'20px',marginTop:'15px',color:'white'}} className='logoText'>Ibaseshop</strong></Button>

                <div className='App-SearchDiv'>

                    <IconButton edge="start"   style={{width:'45px',height:'45px',marginTop:'2px',marginLeft:'2px',float:'right'}} >
                        <SearchIcon style={{fontSize:'40px'}} />
                    </IconButton>

                  <input type='text' value={this.state.search} placeholder="Search for electronics" onChange={this.onChangeSearch} className='searchIP'/>
                </div>

                <Paper style={{'backgroundColor': '#1a237e', 'color': '#c5cae9','flexGrow': '1'}} elevation={0}>

                </Paper>


                <Paper style={{backgroundColor: '#03a9f4', color: '#fff',}} elevation={0}>
                  <Button href="/cart" style={{fontSize:'17px',color:'white'}}>
                    <ShoppingCartIcon style={{height:'30px'}}/>
                    <strong>Cart</strong>
                  </Button>
                  <Button style={{fontSize:'17px',color:'white'}}>
                    <LocationOnIcon style={{height:'30px',}}/>

                    <strong>jaffna</strong>
                  </Button>

                  {!this.state.logIn&&(
                      <Button href="/signin" style={{fontSize:'17px',color:'white'}}>
                            <strong>SignIn</strong>
                      </Button>
                  )}

                  {this.state.logIn&&(
                    <PopupState variant="popover" popupId="demo-popup-menu"  >
                      {(popupState) => (
                        <React.Fragment>
                          <Button  style={{fontSize:'17px',fontWeight:'bold',color:'white'}} {...bindTrigger(popupState)}>
                            <AccountCircle style={{height:'30px',marginRight:'5px'}}/>{localStorage.getItem('username')}
                          </Button>
                          <Menu {...bindMenu(popupState)} style={{marginTop:'40px'}} >
                            <MenuItem onClick={popupState.close} style={{width:'160px'}} ><a href="/profile" style={{color:'black',textDecoration:'none'}}>{localStorage.getItem('username')}</a></MenuItem>
                            <MenuItem onClick={popupState.close}><a href="/createShop" style={{color:'black',textDecoration:'none'}}>Create Shop</a></MenuItem>
                            <MenuItem onClick={popupState.close} onClick={this.logOut}>Log Out</MenuItem>
                          </Menu>
                        </React.Fragment>
                      )}
                    </PopupState>
                  )}



                </Paper>
              </Toolbar>

            </AppBar>

            <div className='topBar2'>
            <Button href="/deals" style={{fontSize:'17px',color:'red',height:'30px',marginLeft:'90px'}}>
              <strong>Deals</strong>
            </Button>
            </div>



            <div className='switchDiv' style={{ minHeight: `${window.innerHeight-400}px` }}>
              <Switch>
                <Route exact path={["/", "/home"]} component={Home} />
                <Route exact path={["/profile"]} component={Profile} />
                <Route exact path={["/search"]} component={Search} />
                <Route exact path={["/product"]} component={Product} />
                <Route exact path={["/additem"]} component={AddItem} />
                <Route exact path={["/signIn"]} component={SignIn} />
                <Route exact path={["/createShop"]} component={CreateShop} />

                <Route exact path={["/admin"]} component={Admin} />
                <Route exact path={["/shopDetails"]} component={ShopDetails} />
                <Route exact path={["/adminShopEdite"]} component={AdminShopEdite} />
                <Route exact path={["/userDetails"]} component={UserDetails} />
                <Route exact path={["/editUser/:id"]} component={EditUser} />
                <Route exact path={["/productDetails"]} component={ProductDetails} />
                <Route exact path={["/editProduct"]} component={EditProduct} />
                <Route exact path={["/orderDetails"]} component={OrderDetails} />
                <Route exact path={["/editOrder"]} component={EditOrder} />
                <Route exact path={["/addOrder"]} component={AddOrder} />







              </Switch>
            </div>
            <Footer/>


        </div>
    </Router>
    );
  }
}

export default App;
