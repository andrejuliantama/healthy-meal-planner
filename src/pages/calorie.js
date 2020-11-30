import '../styles/pages/calorie.scss';
import React, {Component, useState} from 'react';
import {
  Link
} from "react-router-dom";
import { NavBar }from '../components/navbar.js';
import Zoom from 'react-reveal/Zoom';

const Calorie = () =>{
  
    return(
      <div className="result">
        <NavBar />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
        <Zoom>
        <div className="container mt-5">
          <div className="header">
            Daily Calorie Recommendation!
          </div>

          <div className="baris justify-content-center">
            <div className="column align-items-center zoom">
              <span className="days">For 30 Days</span>
              <div className="calorieCon">
                <span className="calories">1500</span>
                <span className="calories">Calories</span>
              </div>
            </div>
            <div className="column align-items-center zoom">
              <span className="days">For 60 Days</span>
              <div className="calorieCon">
                <span className="calories">1700</span>
                <span className="calories">Calories</span>
              </div>
            </div>
          </div>
          <div className="baris justify-content-center">
            <div className="column align-items-center zoom">
              <span className="days">For 90 Days</span>
              <div className="calorieCon">
                <span className="calories">1900</span>
                <span className="calories">Calories</span>
              </div>
            </div>
            <div className="column align-items-center zoom">
              <span className="days">For 180 Days</span>
              <div className="calorieCon">
                <span className="calories">2000</span>
                <span className="calories">Calories</span>
              </div>
            </div>
          </div>
          
          <div className="baris mt-4 justify-content-center">
            <Link to="/meal-recommendation">
              <button ><i>Next</i></button>
            </Link>
          </div>
        </div>
      </Zoom>
    </div>
  );
}
export default Calorie;