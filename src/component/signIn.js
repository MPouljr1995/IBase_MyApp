import React, { Component } from 'react';

import {Grid,Paper,Card,CardContent,Typography,Button} from '@material-ui/core';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

import './css/signin.css';




class SignIn extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: "",
            message: "",
            loginSucces:false,
        };
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

        handleLogin = (event) => {
            event.preventDefault();

            if (this.state.username && this.state.password) {
                console.log("username = " + this.state.username)
                console.log("password = " + this.state.password)

                localStorage.setItem('id', '1');
                localStorage.setItem('username', this.state.username);
                localStorage.setItem('email', 'RAJAN@GMAIL.COM');

                localStorage.setItem('first_name', 'Gnanachchandran');
                localStorage.setItem('last_name', 'Sasitharan');
                localStorage.setItem('address', 'Inuvil South Inuvil');
                localStorage.setItem('phone', '0774440240');

                localStorage.setItem('roles', 'ROLE_ADMIN');
                this.props.history.push("/profile");
                window.location.reload();

                this.setState({
                    loginSucces:true,
                })


            }
        }










    render() {

        return(

            <Paper id="signInCard">
                <CardContent>
                    <ValidatorForm onSubmit={this.handleLogin} >
                        <Typography variant='h3' id="signinTitle">
                            Login to IBaseShop
                        </Typography>
                        <br/>

                        <TextValidator
                            helperText="Please enter username"
                            variant="outlined"
                            label="Username"
                            onChange={this.onChangeUsername}
                            name="Username"
                            value={this.state.username}
                            Id="signInIP1"
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />

                        <br/><br/>

                        <TextValidator
                            helperText="Please enter password"
                            variant="outlined"
                            label="Password"
                            onChange={this.onChangePassword}
                            name="Password"
                            value={this.state.password}
                            id="signInIP2"
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />

                        <br/><br/>

                        <Button variant="contained" id="signinBtn" type="submit"  >
                            LOG IN
                        </Button>

                    </ValidatorForm>
                </CardContent>
            </Paper>

        )
    }
}
export default SignIn;
