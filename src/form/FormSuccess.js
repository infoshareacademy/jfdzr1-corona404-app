import React from "react";
import "./Form.css";
import Success from "./images/success.svg";
const FormSuccess = () => {
  return (
    <div className="form-content-right">
      <span className="close-btn">
        <a href="/">x</a>
      </span>
      <h1 className="form-success">Produkt został dodany!</h1>
      <img className="form-img-2" src={Success} alt="success-image" />
    </div>
  );
};

export default FormSuccess;
