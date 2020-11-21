import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
  },
  formControl: {
    width: "100%",
  },
}));

const CategorySearch = () => {
  const classes = useStyles();
  // const handleOnChange = (event) => {
  //     onFormChange(event.target.value)
  // }

  return (
    <form noValidate autoComplete="off">
      <TextField
        id="outlined-basic"
        label="Wyszukaj po kategorii"
        variant="outlined"
      />
    </form>
  );
};

export default CategorySearch;
