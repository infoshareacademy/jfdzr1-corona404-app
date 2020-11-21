import React from "react";
import PriceSlider from "./PriceSlider";
import InputSearch from "./InputSearch";
import CategorySearch from "./CategorySearch";
import styles from "./searchBar.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    boxSizing: "border-box",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "100px",
    paddingTop: "30px",
  },
});

const SearchBar = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <div className={"inputForm"}>
          <InputSearch />
        </div>

        <div className={"slider"}>
          <PriceSlider />
        </div>

        <div className={"dropdown"}>
          <CategorySearch />
        </div>
      </div>
      <hr className={"borderLine"} />
    </>
  );
};

export default SearchBar;
