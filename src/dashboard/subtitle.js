import React from 'react';
import './dashboard.css';
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import gsap from 'gsap';

const StyledButton = withStyles({
    root: {
      width: '150px',
      height: '50px',
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 10,
      border: 0,
      fontSize:'18px',
      color: 'white',
      height: 50,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      textDecoration:'none'
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);


export class Subtitle extends React.Component {

  componentDidMount(){
    gsap.from(".header2__title",{opacity: 0, x: 100, duration: 1, delay:.5});
    gsap.from(".header2__button",{opacity: 0, y: 50, duration: 1, delay:1.2});
    }

  render(){
    return(
        <div className="header2__container">
            <h1 className="header2__title">Zobacz <br/><span className="header2__span">Najlepsze oferty</span> <br/>w naszym sklepie</h1>
            <StyledButton href="/products" className="header2__button" variant="contained" color="secondary">SPRAWDŹ</StyledButton>
        </div>
    )
  }
}