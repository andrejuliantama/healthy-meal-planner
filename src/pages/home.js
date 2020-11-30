import '../styles/pages/home.scss';
import React, {Component, useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Radio } from "../components/radio.js";
import {
  Link
} from "react-router-dom";
import Zoom from 'react-reveal/Zoom';


const Home = () =>{
  const [gender, setGender] = useState("Male");
  const [activity, setActitivy] = useState("Low");

    const BrownRadio = withStyles({
      root: {
        color: "#D49A89",
        '&$checked': {
          color: "#D49A89"
        },
      },
      checked: {},
    })((props) => <Radio color="default" {...props} />);
  
    const [selectedValue, setSelectedValue] = React.useState('a');
  
    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };
    return (
      <div className="Home">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
        <Zoom>
          <div className="container">
            <div className="header">
              Welcome to Healthy Meal Planner!
            </div>
            <form>
              <label>Name</label>
              <input className="name" type="text"/>
              <div className="baris">
                <div className="column">
                  <label>Age</label>
                  <input className="age" type="number"/>
                </div>
                <div className="column ml-5">
                  <label>Gender</label>
                  <div className="baris mt-2">
                    <Radio
                      value="Male"
                      selected={gender}
                      text="Male"
                      onChange={setGender}
                    />
                    <Radio
                      value="Female"
                      selected={gender}
                      text="Female"
                      onChange={setGender}
                      />
                  </div>
                </div>
                
              </div>
    
              <div className="baris">
                <div className="column mr-5">
                  <label>Weight</label>
                  <div className="baris">
                    <input className="weight" type="number"/>
                    <span className="ml-2 unit">Kg</span>
                  </div>
                </div>
                <div className="column">
                  <label>Height</label>
                  <div className="baris">
                    <input className="height" type="number"/>
                    <span className="ml-2 unit">Cm</span>
                  </div>
                </div>
              </div>
    
              <div className="baris">
                <div className="column mr-5">
                  <label>Target</label>
                  <div className="baris">
                    <input className="weight" type="number"/>
                    <span className="ml-2 unit">Kg</span>
                  </div>
                </div>
                <div className="column">
                  <label>Activity Degree</label>
                  <div className="baris mt-2">
                    <Radio
                      value="Low"
                      selected={activity}
                      text="Low"
                      onChange={setActitivy}
                    />
                    <Radio
                      value="Medium"
                      selected={activity}
                      text="Medium"
                      onChange={setActitivy}
                      />
                    <Radio
                      value="High"
                      selected={activity}
                      text="High"
                      onChange={setActitivy}
                    />
                  </div>
                </div>
              </div>
    
            </form>
            <div className="baris mt-4 justify-content-center">
              <Link to="/result">
                <button ><i>Next</i></button>
              </Link>
            </div>
          </div>
        </Zoom>
      </div>
    );
  
}

export default Home;
