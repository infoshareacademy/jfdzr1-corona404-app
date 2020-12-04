import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
  },
});

function valuetext(value) {
  return `${value} PLN`;
}

const PriceSlider = ({ onSliderChange, priceMin, priceMax }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState([priceMin, priceMax]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    onSliderChange(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography
        style={{ textAlign: "center" }}
        id="range-slider"
        gutterBottom
      >
        Wybierz zakres cen
      </Typography>
      <Slider
        style={{ color: "#b2dddf" }}
        max={300}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
};

export default PriceSlider;
