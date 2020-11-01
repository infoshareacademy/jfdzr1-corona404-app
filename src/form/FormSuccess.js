import React from 'react';
import './Form.css';
import Congrats from './images/thumbup.svg'
const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <span className='close-btn'><a href="/" >x</a></span>
      <h1 className='form-success'>Produkt został dodany!</h1>
      <img className='form-img-2' src={Congrats} alt='success-image' />
    </div>
  );
};

export default FormSuccess;