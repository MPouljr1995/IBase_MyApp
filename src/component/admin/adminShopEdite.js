import React,{Component} from 'react';
import { Card, CardContent, Grid, FormControl, TextField, Input, FormHelperText, OutlinedInput ,Select ,CardActionArea } from '@material-ui/core';
import { Paper, Typography, AppBar, Toolbar, Button, IconButton ,Divider,Box,Link,CardMedia } from "@material-ui/core";
import DelayLink from 'react-delay-link';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Rating from 'material-ui-rating'
import Logo from './../../ibaseshopLogo.png'

import EditSharpIcon from '@material-ui/icons/EditSharp';
import SaveIcon from '@material-ui/icons/Save';


import ApiService from "../../ApiService";


import './../css/adminShopEdite.css';

class AdminShopEdite extends Component {
  constructor(props){
    super(props)
    this.state={
      message:'',
      id:'',
      logo:'',
      shopName:'IBaseShop',
      rating:'4',

      file1: '',
    }
  }

  componentDidMount() {
      this.loadShop();
  }

  loadShop = () => {
      ApiService.findShopById(localStorage.getItem("userId"))
          .then((res) => {
              let shop = res.data;
              this.setState({
                  id: shop.id,
                  shopName: shop.name,
                  logo: shop.logo,
                  rating: shop.rating,
              })
          });
  }

  formUpdate = () => {

    let shop = {id: this.state.id, logo: this.state.logo, shopName: this.state.shopName, rating: this.state.rating};
    ApiService.editShop(shop)
        .then(res => {
            this.setState({message : 'Shop Edit successfully.'});
            setTimeout(() => {
                this.props.history.push('/shopDetails');
                window.location.reload();
            },500)
        });

        this.setState({message : 'Shop Edit successfully.'});
        setTimeout(() => {
            this.props.history.push('/shopDetails');
            window.location.reload();
        },500);
  }

  _handleImage1Change1(e) {
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

  onChangeUpdateShopName = (e) =>{
    this.setState({
        shopName:e.target.value,
    })
  }



  render(){
      let {imagePreviewUrl1} = this.state;


      return(
        <div id="adminShopEditeMainDiv">
        {this.state.message&&(
          <div>
              <div id="shopEditAlertMsgCoverDiv">

              </div>
              <Paper elevation="5" id="shopEditAlertMsgCoverDivPaper" ><Typography variant="h4" style={{textAlign:'center',position:'relative',top:'50px'}}>{this.state.message}</Typography></Paper>
          </div>
        )}
            <Grid container>
                <Grid item xs="12" sm="12" >
                <Box>
                  <Card id="AdminEditeShopLogoCard">
                    <form>
                      <div id="editeLogoImgDiv1">
                          <input className="editeShopLogoFileInput1"
                            type="file"
                            accept="image/*"
                            onChange={(e)=>this._handleImage1Change1(e)}
                           />

                           {!imagePreviewUrl1&&(
                              <img src={Logo} className="editeLogoImg" />
                            )}
                              <img src={imagePreviewUrl1} className="editeLogoImg" />

                      </div>

                      <div id="editeShopNameDiv">
                        <FormControl variant="outlined" id='lastNameIp'>
                            <InputLabel htmlFor="component-outlined">Shop Name</InputLabel>
                            <OutlinedInput
                                id="component-outlined"
                                value={this.state.shopName}
                                onChange={this.onChangeUpdateShopName}
                                label="Shop Name"
                            />
                        </FormControl>
                      </div>
                        <Button id="formUpdateBtn" onClick={()=>this.formUpdate()}><SaveIcon style={{marginRight:'5px'}}/>Update</Button>
                      </form>
                  </Card>
                </Box>
                </Grid>
            </Grid>

            <div id="ediShopCoverDiv"></div>

        </div>
      )
  }
}
export default AdminShopEdite;
