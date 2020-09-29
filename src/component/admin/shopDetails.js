import React,{Component} from 'react';
import { Card, CardContent, Grid, FormControl, TextField, Input, FormHelperText, OutlinedInput ,Select ,CardActionArea } from '@material-ui/core';
import { Paper, Typography, AppBar, Toolbar, Button, IconButton ,Divider,Box,Link,CardMedia } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Rating from 'material-ui-rating'

import CreateIcon from '@material-ui/icons/Create';
import Close from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';


import Logo from './../../ibaseshopLogo.png'

import ApiService from "../../ApiService";

import './../css/shopDetails.css';

class ShopDetails extends Component {
  constructor(props){
    super(props)
    this.state={
      shops:'',
      deleteShopId:'',
      message:'',

      imagePreviewUrl1:'',
      visible:'none',
    }
  }

  handleAdminShopDelete = (e) =>{
    this.setState({
      visible:'block',
      deleteShopId:`${e}`,
    })
  }
  handlecoverHide=(e)=>{
    this.setState({
      visible:'none',
      message:'',
    })
  }

  handleConformDelete = () =>{

      ApiService.deleteShop()
         .then(res => {
             this.setState({message : 'Shop deleted successfully.'});
             this.setState({shops: this.state.shops.filter(shop => shop.id !== this.state.deleteShopId)});
             setTimeout(() => {
                 this.props.history.push('/shopDetails');
                 window.location.reload();
             },500);
         })
         //back end oda connect seytha piraku ithai delete seyya vendum
         this.setState({message : 'Shop deleted successfully.'});
         setTimeout(() => {
             this.props.history.push('/shopDetails');
             window.location.reload();
         },500);
        // window.location.reload();
  }


  handleAdminShopEdite = (shopId) =>{
      localStorage.setItem('EditeShopId',shopId);
      this.props.history.push(`/adminShopEdite?id=${shopId}`);


  }


  _handleImageChange1(e) {
    e.preventDefault();

    let reader1 = new FileReader();
    let file1 = e.target.files[0];

    reader1.onloadend = () => {
      this.setState({
        file1: file1,
        imagePreviewUrl1: reader1.result
      });
    }

    reader1.readAsDataURL(file1)
  }


  render(){

    let {imagePreviewUrl1} = this.state;

    const shops=[
      {
        "id":"1",
        "logo":"",
        "shopName":"IBaseShop",
        "rating":5,
      },{
        "id":"2",
        "shopName":"istore",
        "logo":"https://dcassetcdn.com/design_img/2376125/488343/488343_12394417_2376125_8d608ce0_image.jpg",
        "rating":3,
      },{
        "id":"3",
        "shopName":"Plog",
        "logo":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9QjTar_87HboTgJc_AAGRZVfG5MPQfChZcw&usqp=CAU",
        "rating":4,
      },{
        "id":"4",
        "shopName":"Gnanam Electronics",
        "logo":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ211NssKTxH__7p32wEsB2zVH2heaXbLmsmA&usqp=CAU",
        "rating":5,
      },
    ];


      return(
        <div id="shopDetailsMainDiv">
            <Grid container>
              {
                shops.map(shop =>(
                  <Grid item xs={12}>
                    <Card id="shopDiv" key={shop.id}>
                      <Grid container>
                          <Grid item xs={12} sm={12} md={4} style={{ width:'100%',height:'100%'}}>

                              <div>
                                {shop.logo&&(
                                  <CardMedia
                                    component="img"
                                    image={shop.logo}
                                    title="Shop Logo"
                                    class="img-responsive"
                                    id="shopPageLogo"
                                  />
                                )}
                                {!shop.logo&&(
                                  <img src={Logo} id="shopPageLogo"/>
                                )}
                              </div>






                          </Grid>
                          <Grid item xs={12} sm={12} md={8}>
                              <Typography variant="h4" id="shopTitle">
                                {shop.shopName}
                                <Rating name="read-only" value={shop.rating} size="small" size="small" readOnly   />
                              </Typography>
                              <Button id="shopDetailsDeleteBtn" onClick={() => this.handleAdminShopDelete(shop.id)}><DeleteIcon  style={{marginRight:'5px'}}/>Delete</Button>
                              <Button id="shopDetailsEditeBtn"  onClick={() => this.handleAdminShopEdite(shop.id)}><CreateIcon style={{marginRight:'5px'}}/>Edite</Button>

                          </Grid>
                      </Grid>
                    </Card>
                  </Grid>
                ))
              }
            </Grid>

            <Box id="shopDetailsCoverDiv" style={{display:this.state.visible}}  onClick={() => this.handlecoverHide()}></Box>
            <Paper id="shopDeleteConFormPaper" elevation="3" style={{display:this.state.visible,position:'absolute',left: `${window.innerWidth/2-275}px` }} >
                {!this.state.message&&(
                  <Box>
                    <Typography variant='h4'>Are you sure delete this shop?</Typography>
                    <Button id="deleteShopConformCancel" onClick={() => this.handlecoverHide()}><Close  style={{marginRight:'5px'}}/>Cancel</Button>
                    <Button id="deleteShopConformDelete" onClick={() => this.handleConformDelete()}><DeleteIcon  style={{marginRight:'5px'}}/>Delete</Button>
                  </Box>
                )}
                <Typography variant='h4' style={{marginTop:'30px'}}>{this.state.message}</Typography>
            </Paper>

        </div>
      )
  }
}
export default ShopDetails;
