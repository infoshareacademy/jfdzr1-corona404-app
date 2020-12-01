import React from "react";
import PriceSlider from "./PriceSlider";
import InputSearch from "./InputSearch";
import CategorySearch from "./CategorySearch";
import styles from "./searchBar.css";

// import { Autocomplete } from "@material-ui/lab";

const SearchBar = () => {
  return (
    <>
      <div className={"searchWrapper"}>
        <div className={"flexBar"}>
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
      </div>
      <div className={"lineWrapper"}>
        <hr className={"borderLine"} />
      </div>
    </>
  );
};

export default SearchBar;
