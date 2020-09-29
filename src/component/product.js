import React,{Component} from 'react';

import { AppBar, Typography,CardActionArea,CardMedia,Paper,Divider,Link, } from '@material-ui/core';

import { Card, CardContent, Grid, FormControl, TextField, InputLabel, OutlinedInput, Pape, Box,Select, Button,CardActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import './css/product.css';
import Rating from 'material-ui-rating'


import Alert from '@material-ui/lab/Alert';

import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

import SignIn from './signIn';





class Product extends Component {
  constructor(props){
      super(props)
      this.state={
          quantity:'',
          username:localStorage.getItem('username'),
          logInAlert:'none',









          //img view set
          viewImg1:'',
          viewImg2:'',
          viewImg3:'',
          viewImg4:'',
          viewImg5:'',

          imgBtnBorder1:'1px solid black',
          imgBtnBorder2:'',
          imgBtnBorder3:'',
          imgBtnBorder4:'',
          imgBtnBorder5:'',

      };
}





  handleChangeQuantity=(e) =>{
    this.setState({
      quantity:e.target.value,
    });
  }

  handleImgChange=(e) =>{
    if(e=='listImg1'){
        this.setState({
          viewImg1:'block',

          viewImg2:'none',
          viewImg3:'none',
          viewImg4:'none',
          viewImg5:'none',



          imgBtnBorder1:'1px solid black',

          imgBtnBorder2:'none',
          imgBtnBorder3:'none',
          imgBtnBorder4:'none',
          imgBtnBorder5:'none',
        });
    }else if (e=='listImg2'){
      this.setState({
        viewImg2:'block',

        viewImg1:'none',
        viewImg3:'none',
        viewImg4:'none',
        viewImg5:'none',


        imgBtnBorder2:'1px solid black',

        imgBtnBorder1:'none',
        imgBtnBorder3:'none',
        imgBtnBorder4:'none',
        imgBtnBorder5:'none',
      });
    }
    else if (e=='listImg3'){
      this.setState({
        viewImg3:'block',

        viewImg1:'none',
        viewImg2:'none',
        viewImg4:'none',
        viewImg5:'none',


        imgBtnBorder3:'1px solid black',

        imgBtnBorder2:'none',
        imgBtnBorder1:'none',
        imgBtnBorder4:'none',
        imgBtnBorder5:'none',
      });
    }
    else if (e=='listImg4'){
      this.setState({
        viewImg4:'block',

        viewImg1:'none',
        viewImg2:'none',
        viewImg3:'none',
        viewImg5:'none',


        imgBtnBorder4:'1px solid black',

        imgBtnBorder2:'none',
        imgBtnBorder3:'none',
        imgBtnBorder1:'none',
        imgBtnBorder5:'none',
      });
    }
    else if (e=='listImg5'){
      this.setState({
        viewImg5:'block',

        viewImg1:'none',
        viewImg2:'none',
        viewImg3:'none',
        viewImg4:'none',


        imgBtnBorder5:'1px solid black',

        imgBtnBorder2:'none',
        imgBtnBorder3:'none',
        imgBtnBorder4:'none',
        imgBtnBorder1:'none',
      });
    }
  }



      onChangeUsername = (e) => {
        this.setState({
          username: e.target.value
        });
      }

      onChangePassword = (e) => {
        this.setState({
          password: e.target.value
        });
      }




      buyItNowFun = (e) =>{
      {!this.state.username &&(
        this.setState({
          logInAlert:`${e}`,
        })
      )}


      }





  render(){



    return(
      <div id="productMainDiv">
          <Paper id="productBox" elevation={3}>
                <Grid container>

                      <Grid item xs={12} sm={12} md={6} lg={6} id="imgGrid">
                            <Paper id='productImgBox' elevation={3}>
                                  <CardMedia
                                    Id='productImg1'
                                    component="img"
                                    image={require ("./images/phone1.jpg")}
                                    class="img-responsive"
                                    style={{display:this.state.viewImg1}}
                                  />
                                  <CardMedia
                                    Id='productImg2'
                                    component="img"
                                    image={require ("./images/phone2.jpg")}
                                    class="img-responsive"
                                    style={{display:this.state.viewImg2}}
                                  />
                                  <CardMedia
                                    Id='productImg3'
                                    component="img"
                                    image={require ("./images/phone3.jpg")}
                                    class="img-responsive"
                                    style={{display:this.state.viewImg3}}
                                  />
                                  <CardMedia
                                    Id='productImg4'
                                    component="img"
                                    image={require ("./images/phone4.jpg")}
                                    class="img-responsive"
                                    style={{display:this.state.viewImg4}}
                                  />
                                  <CardMedia
                                    Id='productImg5'
                                    component="img"
                                    image={require ("./images/phone5.jpg")}
                                    class="img-responsive"
                                    style={{display:this.state.viewImg5}}
                                  />
                            </Paper>
                            <Paper id="imgListBox" elevation={4}>
                              <Button id="imgBtn1" onClick={() => this.handleImgChange('listImg1')}   style={{border:this.state.imgBtnBorder1}}>
                                <CardMedia
                                  Id='listImg1'
                                  component="img"
                                  image={require ("./images/phone1.jpg")}
                                  class="img-responsive"

                                />
                              </Button>
                              <Button id="imgBtn2" onClick={() => this.handleImgChange('listImg2')} style={{border:this.state.imgBtnBorder2}}>
                                <CardMedia
                                  Id='listImg2'
                                  component="img"
                                  image={require ("./images/phone2.jpg")}
                                  class="img-responsive"

                                />
                              </Button>
                              <Button id="imgBtn3" onClick={() => this.handleImgChange('listImg3')}   style={{border:this.state.imgBtnBorder3}}>
                                <CardMedia
                                  Id='listImg3'
                                  component="img"
                                  image={require ("./images/phone3.jpg")}
                                  class="img-responsive"

                                />
                              </Button>
                              <Button id="imgBtn4" onClick={() => this.handleImgChange('listImg4')} style={{border:this.state.imgBtnBorder4}}>
                                <CardMedia
                                  Id='listImg4'
                                  component="img"
                                  image={require ("./images/phone4.jpg")}
                                  class="img-responsive"

                                />
                              </Button>
                              <Button id="imgBtn5" onClick={() => this.handleImgChange('listImg5')} style={{border:this.state.imgBtnBorder5}}>
                                <CardMedia
                                  Id='listImg5'
                                  component="img"
                                  image={require ("./images/phone5.jpg")}
                                  title="Contemplative Reptile"
                                  class="img-responsive"

                                />
                              </Button>
                            </Paper>
                      </Grid>

                      <Grid item xs={12} sm={12} md={6} lg={6} id="productInfoGrid">
                            <Paper id="productDetail" className="productDetail" elevation={0}>
                                <Typography gutterBottom  id='producViewTitle' elevation={0} variant="h5">
                                  LizardhdfvgkdfkjvndkjfvjdshnjvnjdfjvdjfszjdfjsIEJfawiejdckwBZSejdjvxfdpjbrlk nfbgxdfvxdfedjkfvb
                                </Typography>
                                <Box id='reviewInfoDiv' elevation={0}>
                                    <Box gutterBottom  id='ratingDiv' elevation={0} >
                                        <Rating name="read-only" value={3} readOnly style={{}} /> <Link variant='span' id="reviewText" href="#feedbackMainDiv">10 Reviews</Link>
                                    </Box>
                                    <Typography gutterBottom  id='offer' elevation={0} variant="subtitle1">
                                        18000 Rs
                                    </Typography>
                                    <Typography gutterBottom  id='sellPrice' elevation={0} variant="subtitle1">
                                        15000 Rs
                                    </Typography>

                                    <Typography gutterBottom  id='warrantyDiv' elevation={0} variant="subtitle1">
                                      Warranty :- 12 Months
                                    </Typography>
                                    <Box gutterBottom  id='quantityDiv' elevation={0} variant="subtitle1">
                                      <Typography variant="span">Quantity :-</Typography>
                                        <FormControl variant="outlined" id="quantityIp">

                                            <Select
                                                Id="quantitySelect"
                                                native
                                                value={this.state.gender}
                                                onChange={this.handleChangeQuantity}
                                                inputProps={{
                                                  name:'quantity',
                                                  id:'outline-quantity-native-simple'
                                                }}
                                            >
                                                <option value={1}>1</option>
                                                <option value={2}>2</option>
                                                <option value={3}>3</option>
                                                <option value={4}>4</option>
                                                <option value={5}>5</option>
                                                <option value={6}>6</option>
                                                <option value={7}>7</option>
                                                <option value={8}>8</option>
                                                <option value={9}>9</option>
                                                <option value={10}>10</option>
                                            </Select>
                                        </FormControl>
                                    </Box>

                                </Box>


                                <Box id="buyBtnArea" elevation={0}>

                                    <Button Id="buyNowBtn" onClick={() => this.buyItNowFun('block')} >Buy Now</Button>

                                    <Button Id="addToCartBtn" >Add To Cart</Button>

                                </Box>




                                <Divider id='divider'/>
                                <Box id='sellerInfoDiv' elevation={0}>
                                    <Typography gutterBottom  id='soldByText' elevation={0} variant="p">
                                        SOLD BY :
                                    </Typography>
                                    <Typography gutterBottom  id='soldShopName' elevation={0} variant="h6" >
                                        <Link href="/shop?shopId=id" id="shopLink">ShopName</Link>
                                    </Typography>
                                    <Typography gutterBottom  id='soldShopAddress' elevation={0} variant="p">
                                        Inuvil South, Chunnakam.
                                    </Typography>
                                    <Typography gutterBottom  id='soldShopRating' elevation={0} variant="p">

                                    </Typography>
                                </Box>
                            </Paper>

                      </Grid>

                </Grid>

          </Paper>



          <Box id="loginAlertDivWaraper" style={{display:this.state.logInAlert}} onClick={() => this.buyItNowFun('none')} elevation={3}>
          </Box>

          <Paper id="loginAlertDiv" style={{}} style={{ display:this.state.logInAlert, left: `${window.innerWidth/2-300}px` }} >
              <SignIn />
          </Paper>



          {/* Description and feedback area */}

          <Paper id="DescriptionDivWarraper" elevation="3">
              <Grid container id="">
                    <Grid  item xs={12} >
                          <Typography id='descriptionHeading' variant="h5" id="desTitile" style={{marginLeft:'30px',marginTop:'20px'}}>Description</Typography>
                          <Box id="DescriptionDiv">
                          this is good quality phone. 4GB RAM. 16GB ROM. 4000mha battery. adefbgaejfb jhagbfea ugejfihsadkjfasd jageifuhsdif kjasdhfiuhasdf aksjdhfuiasdhf defbgaejfb
                           jhagbfea ugejfihsadkjfasd jageifuhsdif kjasdhfiuhasdf aksjdhfuiasdhf jhgawyfegsidf jasgdifuh defbgaejfb jhagbfea ugejfihsadkjfasd
                          jageifuhsdif kjasdhfiuhasdf aksjdhfuiasdhf jhgawyfegsidf jasgdifuh jhgawyfegsidf jasgdifuhasiudefy jawgefsdgf jhsgadfsagdc jasgdfg
                          </Box>
                    </Grid>
              </Grid>
          </Paper>


          <Paper id="feedbackMainDiv" elevation="3">

              <Grid container id="feedbackSection">
                  <Typography id='descriptionHeading' variant="h5" id="desTitile" style={{marginLeft:'30px',marginTop:'20px'}}>Rating And Feedbacks</Typography>






                        <Paper  id="feedbackPaper" >
                            <Grid container>

                                <Grid  item xs={12} md={4} id="nameAndRatingDivGrid">
                                      <Box id="nameAndRatingDiv">
                                          <Typography id="raterName">Sasitharan</Typography>
                                          <Typography id="feedbackRating"><Rating name="read-only" value={3} readOnly style={{}} /></Typography><Typography Id="feedbackRatingNumber">3</Typography>
                                          <Typography id="ratingDate">10.07.2020</Typography>
                                      </Box>
                                </Grid>
                                <Grid  item xs={12} md={8} id="feedbackWarraperGrid">
                                      <Box id="feedbackDiv">
                                          <Typography id="feedbackText">this is very good quality and very sdgdf dzsfawefv ergsds sdfgsgsadzs </Typography>
                                      </Box>
                                </Grid>

                            </Grid>
                        </Paper>



                        <Paper id="feedbackPaper" >
                            <Grid container>

                                <Grid  item xs={12} md={4} id="nameAndRatingDivGrid">
                                      <Box id="nameAndRatingDiv">
                                          <Typography id="raterName">Sasitharan</Typography>
                                          <Typography id="feedbackRating"><Rating name="read-only" value={3} readOnly style={{}} /></Typography><Typography Id="feedbackRatingNumber">3</Typography>
                                          <Typography id="ratingDate">10.07.2020</Typography>
                                      </Box>
                                </Grid>
                                <Grid  item xs={12} md={8} id="feedbackWarraperGrid">
                                      <Box id="feedbackDiv">
                                          <Typography id="feedbackText">this is very good quality and very sdgdf dzsfawefv ergsds sdfgsgsadzs </Typography>
                                      </Box>
                                </Grid>

                            </Grid>
                        </Paper>




                        <Paper  id="feedbackPaper" >
                            <Grid container>

                                <Grid  item xs={12} md={4} id="nameAndRatingDivGrid">
                                      <Box id="nameAndRatingDiv">
                                          <Typography id="raterName">Sasitharan</Typography>
                                          <Typography id="feedbackRating"><Rating name="read-only" value={3} readOnly style={{}} /></Typography><Typography Id="feedbackRatingNumber">3</Typography>
                                          <Typography id="ratingDate">10.07.2020</Typography>
                                      </Box>
                                </Grid>
                                <Grid  item xs={12} md={8} id="feedbackWarraperGrid">
                                      <Box id="feedbackDiv">
                                          <Typography id="feedbackText">this is very good quality and very sdgdf dzsfawefv ergsds sdfgsgsadzs </Typography>
                                      </Box>
                                </Grid>

                            </Grid>
                        </Paper>



                        <Paper  id="feedbackPaper" >
                            <Grid container>

                                <Grid  item xs={12} md={4} id="nameAndRatingDivGrid">
                                      <Box id="nameAndRatingDiv">
                                          <Typography id="raterName">Sasitharan</Typography>
                                          <Typography id="feedbackRating"><Rating name="read-only" value={3} readOnly style={{}} /></Typography><Typography Id="feedbackRatingNumber">3</Typography>
                                          <Typography id="ratingDate">10.07.2020</Typography>
                                      </Box>
                                </Grid>
                                <Grid  item xs={12} md={8} id="feedbackWarraperGrid">
                                      <Box id="feedbackDiv">
                                          <Typography id="feedbackText">this is very good quality and very sdgdf dzsfawefv ergsds sdfgsgsadzs </Typography>
                                      </Box>
                                </Grid>

                            </Grid>
                        </Paper>










              </Grid>
          </Paper>



      </div>
    );
  }
}
export default Product;
