import '../styles/pages/result.scss';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import React, {Component, useState} from 'react';
import { Radio } from "../components/radio.js";
import {
  Link
} from "react-router-dom";
import { NavBar }from '../components/navbar.js';
import Zoom from 'react-reveal/Zoom';

const Result = () =>{
  
    return(
      <div className="result">
        <NavBar />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
        <Zoom>
        <div className="container mt-5">
          <div className="header">
            Your Result!
          </div>
          <div className="baris justify-content-around">
            <div className="column">
              <span className="bmi">Current BMI</span>
              <div className="bmiNumCon">
                <span className="bmiNum">15</span>
              </div>
              
            </div>
            <div className="column">
              <span className="bmi">Target BMI</span>
              <div className="bmiNumCon">
                <span className="bmiNum">20</span>
              </div>
            </div>
          </div>

          <div className="baris justify-content-center mt-5">
            <span className="category mb-3">Categories</span>
          </div>
          <div className="baris justify-content-around">
            <div className="column align-items-center">
              <div className="categoryCon">
                <span className="categoryNum"> &lt; 18.5</span>
              </div>
              <span className="categories">Underweight</span>
            </div>
            <div className="column align-items-center">
              <div className="categoryCon">
                <span className="categoryNum"> 18.5 - 24.9</span>
              </div>
              <span className="categories">Normal</span>
            </div>
            <div className="column align-items-center">
              <div className="categoryCon">
                <span className="categoryNum"> 25 - 29.9</span>
              </div>
              <span className="categories">Overweight</span>
            </div>
            <div className="column align-items-center">
              <div className="categoryCon">
                <span className="categoryNum"> 30 - 34.9</span>
              </div>
              <span className="categories">Obese</span>
            </div>
            <div className="column align-items-center">
              <div className="categoryCon">
                <span className="categoryNum"> &gt; 35 </span>
              </div>
              <span className="categories">Extremely Obese</span>
            </div>
          </div>
          
          <div className="baris mt-5 justify-content-center">
            <Link to="/calorie-plan">
              <button ><i>Next</i></button>
            </Link>
          </div>
        </div>
      </Zoom>
    </div>
  );
}
export default Result;