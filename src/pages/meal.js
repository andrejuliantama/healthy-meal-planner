import '../styles/pages/result.scss';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import React, {Component, useState} from 'react';
import { Radio } from "../components/radio.js";
import {
  Link
} from "react-router-dom";
import { NavBar }from '../components/navbar.js';
import Zoom from 'react-reveal/Zoom';



const Meal = () =>{
  
    return(
      <div className="result">
        <NavBar />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
        <Zoom>
        <div className="container mt-5">
          <div className="header">
            Meal Plan Recommendation!
          </div>
          
          <div className="baris mt-4 justify-content-center">
            <Link to="/">
              <button ><i>Back to Home</i></button>
            </Link>
          </div>
        </div>
      </Zoom>
    </div>
  );
}
export default Meal;