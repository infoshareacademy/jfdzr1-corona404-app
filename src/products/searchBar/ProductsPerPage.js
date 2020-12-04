// import React from "react";
// import Radio from "@material-ui/core/Radio";
// import RadioGroup from "@material-ui/core/RadioGroup";

// import FormControl from "@material-ui/core/FormControl";
// import FormLabel from "@material-ui/core/FormLabel";
// import { withStyles } from "@material-ui/core/styles";

// const ColorRadio = withStyles({
//   root: {
//     color: "#b2dddf",
//     "&$checked": {
//       color: "#b2dddf",
//     },
//   },
//   checked: {},
// })((props) => <Radio color="default" {...props} />);

// export default function RadioButtonsGroup({ onProductsPerPageChanged }) {
//   const [value, setValue] = React.useState("8");

//   const handleChange = (event) => {
//     setValue(event.target.value);
//     onProductsPerPageChanged(event.target.value);
//   };
//   return (
//     <FormControl component="fieldset">
//       <FormLabel component="legend">Ilość produktów na stronie</FormLabel>
//       <RadioGroup
//         row
//         aria-label="gender"
//         name="gender1"
//         value={value}
//         onChange={handleChange}
//       >
//         <ColorRadio value="8" control={<Radio />} label="8" />
//         <ColorRadio value="12" control={<Radio />} label="12" />
//         <ColorRadio value="16" control={<Radio />} label="16" />
//       </RadioGroup>
//     </FormControl>
//   );
// }
