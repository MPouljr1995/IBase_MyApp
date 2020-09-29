import React,{Component} from 'react';
import Banner from './banner.jpg';
import './css/home.css'

import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';



class Home extends Component {

  render(){
    return(
      <div className='Home' style={{backgroundColor:'#d4e3fc'}}>
        <div className='homeImgDiv'>
          <div className='homeImgWar'>
            <img src={Banner} className='homeImg' />
          {
            //<a href='https://www.freepik.com/vectors/banner'>Banner vector created by upklyak - www.freepik.com</a>
          }
          </div>
        </div>
        <div className=''>
        </div>
      </div>
    );
  }
}

export default Home;
