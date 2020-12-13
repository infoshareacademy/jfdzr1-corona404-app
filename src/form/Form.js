import React, { useState } from "react";
import "./Form.css";
import FormAdd from "./FormAdd";
import FormSuccess from "./FormSuccess";
import Shopping from "./images/shopping.svg";
const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <section className="form-body">
        <div className="form-container">
          <div className="form-content-left">
            <img className="form-img" src={Shopping} alt="shopping" />
          </div>
          {!isSubmitted ? <FormAdd submitForm={submitForm} /> : <FormSuccess />}
        </div>
      </section>
    </>
  );
};

export default Form;
