import React from 'react';
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { withStyles } from "@material-ui/core/styles";

const ColorRadio = withStyles({
    root: {
      color: "#b2dddf",
      "&$checked": {
        color: "#b2dddf",
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);
  
  export default function SortingPrice({ onSortPrice }) {
    const [value, setValue] = React.useState("3");
  
    const handleChange = (event) => {
      setValue(event.target.value);
      onSortPrice(event.target.value);
    };

    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">Sortuj ceny</FormLabel>
        <RadioGroup
          row
          aria-label="gender"
          name="gender1"
          value={value}
          onChange={handleChange}
          style={{ display: 'inline-block', alignItems: 'center'}}
        >
          <ColorRadio value="1" control={<Radio />} label="Rosnąco" />Rosnąco
          <ColorRadio value="2" control={<Radio />} label="Malejąco" />Malejąco
          <ColorRadio value="3" control={<Radio />} label="Brak" />Brak
        </RadioGroup>
      </FormControl>
    );
  }
  