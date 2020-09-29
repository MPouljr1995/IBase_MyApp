import React,{Component} from 'react';
import { Card, CardContent, Grid, FormControl, TextField, Input, FormHelperText, OutlinedInput ,Select } from '@material-ui/core';
import { Paper, Typography, AppBar, Toolbar, Button, IconButton ,Divider,Box } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';

import ApiService from "../../ApiService";


import '../css/profile.css';
import PoulApiService from '../../ApiService/PoulApiService';


const style={
    float:'right',
    marginRight:'50px',
    marginTop:'30px',

}

class EditUser extends Component {
  constructor(props){
    super(props);
    this.state = {show: 'true'};
    this.state={
      id: '',
      username:'',
      firstName: '',
      lastName: '',
      email:'',
      phone:'',
      address:'',
      users: [],
    }

  }
      componentDidMount() {

        const userid = this.props.match.params.id;
        if (userid) {
            this.loadUser(userid);
        }
          
      }

      loadUser = (userid) => {
          PoulApiService.findUserById(userid)
              .then((res) => {
                  console.log(res)
                  let user = res.data;
                  this.setState({
                      id: user.usetId,
                      username: user.userName,
                      firstName: user.firstName,
                      lastName: user.lastName,
                      email:user.email,
                      phone:user.phoneNumber,
                      address:user.address,
                  })
              });
      }


      //update user api
            updateUser = (e) => {
                e.preventDefault();
                let user = {
                      id: this.state.userId,
                      userName: this.state.username,
                      firstName: this.state.firstName,
                      lastName: this.state.lastName,
                      email:this.state.email,
                      phone:this.state.phone,
                      address:this.state.address,
                    };
                ApiService.editUser(user)
                    .then(res => {
                        this.setState({message : 'User added successfully.'});
                        this.props.history.push('/userDetails');
                    });
            }




//profile_name edite start


    onChangeUpdateFirstName=(e)=>{
        this.setState({
          firstName:e.target.value,
        })
    }


//profile_name edite end


//profile last_name edite start


    onChangeUpdateLastName=(e)=>{
        this.setState({
          lastName:e.target.value,
        })
    }

//profile last_name edite end



//profile email edite start


    onChangeUpdateEmail=(e)=>{
        this.setState({
          email:e.target.value,
        })
    }

//profile email edite end


//profile phone edite start

    onChangeUpdatePhone=(e)=>{
        this.setState({
          phone:e.target.value,
        })
    }

//profile phone edite end



//profile address edite start


    onChangeUpdateAddress=(e)=>{
        this.setState({
          address:e.target.value,
        })
    }

//profile address edite end




  render(){


    return (

        <Paper className='profileDivWarraper' elevation={1}>
          <Typography id="profileHeading">Edit User</Typography>
            <Grid container id="profileGrid">
              {/*<Grid item xs={3} >
                  <div className='profileSideDiv'>
                    <br/>
                    <Button  type='button' onClick={() => this.handleClick('personalInfoContentDiv')}  id='proSideDivBtn'>Personal Info</Button><br/><br/>
                    <Divider />
                    <br/>
                    <Button  onClick={() => this.handleClick('editeProfileDiv')} id='proSideDivBtn'>Edite Personal Info</Button><br/><br/><Divider /><br/>
                    <Button  onClick={() => this.handleClick('myShopDiv')} id='proSideDivBtn'>My Shops</Button><br/><br/><Divider /><br/>
                    <Button  onClick={() => this.handleClick('myReviewDiv')} id='proSideDivBtn'>My Review</Button><br/><br/><Divider /><br/>
                  </div>
              </Grid>*/}


                  <Grid item xs={12} sm={12} md={6}>

                    <Paper id="userNameDiv" elevation={3}>
                        <Typography variant="h6" id="userNameDivTitle">User name</Typography>
                        <Typography variant="h5" id="userNameLabel">{this.state.username}</Typography>
                    </Paper>

                  </Grid>

                  <Grid item xs={12} sm={12} md={6}>

                    <Paper id="firstNameDiv" elevation={3}>
                        <Box id="firstNamebox">
                          <Typography variant="h6" id="firstNameDivTitle">First name</Typography>

                              <FormControl variant="outlined" id='firstNameIp'>
                                  <InputLabel htmlFor="component-outlined">First Name</InputLabel>
                                  <OutlinedInput
                                      id="component-outlined"
                                      value={this.state.firstName}
                                      onChange={this.onChangeUpdateFirstName}
                                      label="First Name"
                                  />
                              </FormControl>

                        </Box>


                    </Paper>

                  </Grid>

                  <Grid item xs={12} sm={12} md={6}>

                    <Paper id="lastNameDiv" elevation={3}>
                        <Box id="lastNamebox">
                            <Typography variant="h6" id="lastNameDivTitle">Last name</Typography>

                                <FormControl variant="outlined" id='proLastNameIp'>
                                    <InputLabel htmlFor="component-outlined">Last Name</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={this.state.lastName}
                                        onChange={this.onChangeUpdateLastName}
                                        label="Last Name"
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
                                        onChange={this.onChangeUpdateEmail}
                                        label="Email"
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
                                        onChange={this.onChangeUpdatePhone}
                                        label="Phone"
                                        type="Number"
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
                                        onChange={this.onChangeUpdateAddress}
                                        label="Address"
                                    />
                                </FormControl>

                        </Box>



                    </Paper>


                  </Grid>

                  <Grid item xs={12} sm={12} >
                      <Box style={style}>
                        <Button onClick={this.updateUser} style={{backgroundColor:'white',fontWeight:'bold',backgroundColor:'#03a9f4',color:'white'}}>Update</Button>
                      </Box>
                  </Grid>







            </Grid>


        </Paper>

    );
  }
}

export default EditUser;
