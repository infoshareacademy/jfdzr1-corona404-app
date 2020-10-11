import React from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const StyledButton = withStyles({
    root: {
      width: '130px',
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      fontSize:'18px',
      color: 'white',
      height: 40,
      padding: '0 20px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);

class Summary extends React.Component {

    state = {
        totalPrice: 850,
        sendPrice: 25
    }

    render() {
        return (
            <>
                <Typography variant="h5">Podsumowanie</Typography>
                <div style={{ margin: "50px auto", textAlign: 'left', width:'80%' }}>
                    <div style={{marginBottom:"30px"}}>
                        <Typography variant="h7">Łączna kwota <br /> (w tym VAT) :
                        <span style={{fontWeight:"800",float:'right'}}> {this.state.totalPrice} zł</span>
                        </Typography>
                    </div>
                    <div>
                    <Typography variant="h7">Wysyłka :
                        <span style={{fontWeight:"800", float:'right'}}>{this.state.sendPrice} zł</span>
                    </Typography>
                    </div>
                    <div style={{textAlign:'center', marginTop:'50px'}}>
                    <StyledButton>Zamów</StyledButton>
                    </div>
                </div>
            </>
        )
    }
}

export default Summary;