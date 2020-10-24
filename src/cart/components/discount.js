import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'


class Discount extends React.Component {

    state = {
        shouldShowDiscountBox: false,
        discountCode:''
    }

    handleOnClick = () => {
        this.setState({
            shouldShowDiscountBox: !this.state.shouldShowDiscountBox,
        })
    }

    handleChange = (event) =>{
        this.setState({
            discountCode: event.target.value
        })
    }


    render() {
        return (
            <div className="discount">
                <FormControlLabel style={{ padding: '5px 10px' }}
                    control={
                        <Checkbox
                            size="small"
                            color="default"
                            onClick={this.handleOnClick} />
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
                    <Button type="submit" variant="containd" color="default">Zrealizuj</Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Discount;