import React,{Component} from 'react';
import { AppBar, Typography } from '@material-ui/core';
import { Card, CardContent, Grid, FormControl, TextField,Box,Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from '@material-ui/icons/Email';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import Viber from './images/viber.png';


import BottomNavigation from '@material-ui/core/BottomNavigation';


import './css/footer.css';



function Footer() {


    return (
        <footer position="fixed" className='bottomAppBar'>
          <div className='footerDiv' style={{margin:'auto'}}>
            <Grid container spacing={5}>
              <Grid item xs={4}  style={{textIndent:'50px'}}>
                <p className='footerHeading'>about us</p>
                <Typography className='footerItem'  ><a href='/aboutus' className='footerLink'>About Us</a></Typography>
                <Typography className='footerItem' ><a href='/TermsAndConditions' className='footerLink'>Terms & Conditions</a></Typography>
                <Typography className='footerItem' ><a href='/PrivacyPolicy' className='footerLink'>Privacy Policy</a></Typography>
              </Grid>

              <Grid item xs={4} style={{textIndent:'50px'}}>
                <p className='footerHeading'>Follow Us</p>
                <Typography className='footerItem' ><a href='https://www.facebook.com/IBaseShop-174060981057132' target='_blank' className='footerLink'> <FacebookIcon style={{position:'relative',top:'5px'}} /> Facebook</a></Typography>
                <Typography className='footerItem' ><a href='https://www.instagram.com/ibaseshop/' target='_blank' className='footerLink'> <InstagramIcon style={{position:'relative',top:'5px'}}/> Instagram</a></Typography>
                <Typography className='footerItem' ><a href='https://twitter.com/IBaseShop1'  target='_blank' className='footerLink'> <TwitterIcon style={{position:'relative',top:'5px'}} /> Twitter</a></Typography>
                <Typography className='footerItem' ><a href='/aboutus'  target='_blank' className='footerLink'> <YouTubeIcon style={{position:'relative',top:'5px'}} /> Youtube</a></Typography>
              </Grid>

              <Grid item xs={4} style={{textIndent:'50px'}}>
                <p className='footerHeading'>Contact Us</p>
                <Typography className='footerItem'  ><img src ={Viber} style={{width:'25px',position:'relative',top:'5px'}}/> Viber</Typography>
                <Typography className='footerItem' > <WhatsAppIcon style={{position:'relative',top:'5px'}} /> Whatsapp</Typography>
                <Typography className='footerItem' ><EmailIcon style={{position:'relative',top:'5px',marginRight:'5px'}} />Email</Typography>
              </Grid>


            </Grid>
          </div>
        </footer>
    )
}

export default Footer;
