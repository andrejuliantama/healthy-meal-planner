import '../styles/pages/home.scss';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import React, {Component, useState} from 'react';
import { Radio } from "../components/radio.js";
import { withStyles } from '@material-ui/core/styles';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


const Result = () =>{
  const [selected, setSelected] = useState("first");

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
    return(
      <div>
        <Radio
          value="first"
          selected={selected}
          text="First Radio Button"
          onChange={setSelected}
        />
        <Radio
        value="second"
        selected={selected}
        text="Second Radio Button"
        onChange={setSelected}
      />
      </div>

        
        
    );
}
export default Result;