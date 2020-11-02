import React from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={9} variant="standard"  {...props} />;
}

export default class DiscountPopup extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            open: this.props.open
        }
    }

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        } else {
            this.setState({
                open: false
            })
        }
    }
    render() {

        return (
            <Snackbar anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }} open={this.state.open} autoHideDuration={3000} onClose={this.handleClose}>
                <Alert onClose={this.handleClose} severity="error">
                    Ten produkt już znajduje się w koszyku
                </Alert>
            </Snackbar>
        )
    }
}