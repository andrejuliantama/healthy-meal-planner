import '../styles/pages/calorie.scss';
import React, {Component, useState, useEffect} from 'react';
import {
  Link
} from "react-router-dom";
import { NavBar }from '../components/navbar.js';
import Zoom from 'react-reveal/Zoom';

const Calorie = () =>{
  const [bmr, setBMR] = useState("");
  const [thirtyday, setThirtyday] = useState("");
  const [sixtyday, setSixtyday] = useState("");
  const [ninetyday, setNinetyday] = useState("");
  const [oneeightyday, setOneeighty] = useState("");

  useEffect(() => {
    var a = (10*window.$sesi['weight'])+(6.25*window.$sesi['height'])-(5*window.$sesi['age']);
    if(window.$sesi['weight'] === "Male"){
      // setBMR(5+a);
      a = a+5;
    } else {
      // setBMR(a-161);
      a = a-161;
    }
    if(window.$sesi['activity'] === "High"){
      setBMR(a*2.25);
      a = a*2.25;
    } else if(window.$sesi['activity'] === "Medium"){
      setBMR(a*1.76);
      a = a*1.76;
    } else {
      setBMR(a*1.53);
      a = a*1.53;
    }
    setThirtyday((a-(7716.179*(window.$sesi['weight']-window.$sesi['target'])/30)).toFixed(1));
    setSixtyday((a-(7716.179*(window.$sesi['weight']-window.$sesi['target'])/60)).toFixed(1));
    setNinetyday((a-(7716.179*(window.$sesi['weight']-window.$sesi['target'])/90)).toFixed(1));
    setOneeighty((a-(7716.179*(window.$sesi['weight']-window.$sesi['target'])/180)).toFixed(1));
    

  });

  function handleClick(durasi) {
    window.$sesi['durasi'] = durasi;
  }

    return(
      <div className="result">
        <NavBar />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
        <Zoom>
        <div className="container mt-5">
          <div className="header">
            Daily Calorie Recommendation!
          </div>

          {/* <div className="baris justify-content-center">
            <div className="column align-items-center zoom">
              <span className="days">Original BMR</span>
              <div className="calorieCon">
                <span className="calories">{bmr}</span>
                <span className="calories">Calories</span>
              </div>
            </div>
          </div> */}
          


          <div className="baris justify-content-center">
           <Link to="/meal-recommendation" onClick={() => handleClick(30)} style={{ textDecoration: 'none' }}>
              <div className="column align-items-center zoom">
                <span className="days">For 30 Days</span>
                <div className="calorieCon">
                  <span className="calories" style={{color: parseFloat(thirtyday) < 1000 ? "red" : ""}}>{thirtyday}</span>
                  <span className="calories">Calories</span>
                </div>
              </div>
            </Link>
            <Link to="/meal-recommendation" onClick={() => handleClick(60)} style={{ textDecoration: 'none' }}>
              <div className="column align-items-center zoom">
                <span className="days">For 60 Days</span>
                <div className="calorieCon">
                  <span className="calories" style={{color: parseFloat(sixtyday) < 1000 ? "red" : ""}}>{sixtyday}</span>
                  <span className="calories">Calories</span>
                </div>
              </div>
            </Link>
          </div>
          
          <div className="baris justify-content-center">
            <Link to="/meal-recommendation" onClick={() => handleClick(90)} style={{ textDecoration: 'none' }}>
            <div className="column align-items-center zoom">
                <span className="days">For 90 Days</span>
                <div className="calorieCon">
                  <span className="calories" style={{color: parseFloat(ninetyday) < 1000 ? "red" : ""}}>{ninetyday}</span>
                  <span className="calories">Calories</span>
                </div>
              </div>
            </Link>
            <Link to="/meal-recommendation" onClick={() => handleClick(180)} style={{ textDecoration: 'none' }}>
              <div className="column align-items-center zoom">
                <span className="days">For 180 Days</span>
                <div className="calorieCon">
                  <span className="calories" style={{color: parseFloat(oneeightyday) < 1000 ? "red" : ""}}>{oneeightyday}</span>
                  <span className="calories">Calories</span>
                </div>
              </div>
            </Link>
            
          </div>
          
          <div className="baris mt-4 justify-content-center">
            { /*<Link to="/meal-recommendation">
              <button ><i>Next</i></button>
            </Link> */ }
          </div>
        </div>
      </Zoom>
    </div>
  );
}
export default Calorie;