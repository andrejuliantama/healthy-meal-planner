import './App.scss';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import React, {Component} from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

//Import Route Classes
import Home from "./pages/home.js";
import Result from "./pages/result.js";
import Calorie from "./pages/calorie.js";
import Meal from "./pages/meal.js";


class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/result" component={Result}/>
          <Route exact path="/calorie-plan" component={Calorie}/>
          <Route exact path="/meal-recommendation" component={Meal}/>
        </Switch> 
      </BrowserRouter>
    );
  }
}

export default App;
