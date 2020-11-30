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


class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/result" component={Result}/>
        </Switch> 
      </BrowserRouter>
    );
  }
}

export default App;
