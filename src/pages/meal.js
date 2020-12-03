import '../styles/pages/meal.scss';
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
      <div className="meal">
        <NavBar />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
        <Zoom>
        <div className="container mt-5">
          <div className="header">
            Meal Plan Recommendation!
          </div>
          <div className="baris justify-content-center">
            <div className="column align-items-center">
              <div className="mealCon">
                <span className="text">Salad</span>
                <img src="/assets/salad.jpg"/>
                <span className="text">108 Calories</span>
              </div>
            </div>
            <div className="column align-items-center">
              <div className="mealCon">
                <span className="text">Burger</span>
                <img src="/assets/burger.jpg"/>
                <span className="text">354 Calories</span>
              </div>
            </div>
          </div>
          
          <div className="baris justify-content-center">
          <div className="column align-items-center">
              <div className="mealCon">
                <span className="text">Water</span>
                <img src="/assets/water.jpg"/>
                <span className="text">0 Calories</span>
              </div>
            </div>
            <div className="column align-items-center">
              <div className="mealCon">
                <span className="text">Orange Juice</span>
                <img src="/assets/orange.jpg"/>
                <span className="text">45 Calories</span>
              </div>
            </div>
          </div>
          
          <div className="baris mt-3 justify-content-center">
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