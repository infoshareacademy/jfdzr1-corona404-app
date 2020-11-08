import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import { FaCheckCircle } from 'react-icons/fa';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Typography } from '@material-ui/core';


class Discount extends React.Component {

    state = {
        shouldShowDiscountBox: false,
        discountCode: ''
    }


    handleOnClickCheckbox = () => {
        this.setState({
            shouldShowDiscountBox: !this.state.shouldShowDiscountBox,
        })
    }

    handleChange = (event) => {
        this.setState({
            discountCode: event.target.value
        })
    }

    handleDiscountChange = () => {
        setTimeout(() => {
            this.setState({
                discountCode: ''
            })
        }, 1);
    }


    render() {
        if (this.props.discountAccepted === true) {
            return <div className="discount">
                <Typography variant='h6' style={{ display: 'flex', alignItems: 'center', fontWeight: '400', paddingLeft: '20px' }}>
                    <FaCheckCircle style={{ marginRight: '20px', color: '#88c238' }} />
                        Kod Rabatowy
                    </Typography>
            </div>
        } else {
            return (
                <div className="discount">
                    <FormControlLabel style={{ padding: '5px 10px' }}
                        control={
                            <Checkbox
                                size="small"
                                color="default"
                                onClick={this.handleOnClickCheckbox}
                            />
                        }
                        label="Dodaj kod rabatowy"
                    />
                    <div style={this.state.shouldShowDiscountBox ? { display: 'block' } : { display: 'none' }}>
                        <form
                            onSubmit={(event) => this.props.handleOnSubmit(event, this.state.discountCode)}>
                            <TextField
                                value={this.state.discountCode}
                                onChange={this.handleChange}
                                color="secondary"
                                size="small"
                                style={{ margin: '5px 0 15px' }}
                                label="Kod Rabatowy" />
                            <Button onClick={this.handleDiscountChange} type="submit" variant="containd" color="default">Zrealizuj</Button>
                        </form>
                    </div>
                </div>
            )
        }
    }
}

export default Discount;