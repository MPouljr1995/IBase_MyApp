import React,{Component} from 'react';
import { AppBar, Typography } from '@material-ui/core';
import { Card, CardContent, Grid, FormControl, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import FacebookIcon from '@material-ui/icons/Facebook';

import BottomNavigation from '@material-ui/core/BottomNavigation';


import './css/profile.css';



function PersonalInfoDiv() {


    return (
      <div className='personalInfoContentDiv'>
        <p className='PersonalInfoHead'>Manage My Account</p>
        <li>First Name :- {this.state.first_name}</li>
        <li>Last Name :- {this.state.first_name}</li>
        <li>Address :- {this.state.first_name}</li>
        <li>Phone Number :- {this.state.first_name}</li>
        <li>Email :- {this.state.email}</li>
        <li>Gender :- {this.state.gender}</li>
      </div>
    )
}

export default PersonalInfoDiv;
