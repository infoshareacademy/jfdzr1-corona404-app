import React from 'react';
import './dashboard.css';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import RateUs from './Rating/Rating'

function Comments() {
    const value = 5;
    return (
        <div className="comments__container">
            <div className="comments">
            <div className="comment">
                <Typography variant="h5">"Best shopping website i've ever used"</Typography>
                <Typography variant="h6">John B.</Typography>
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Rating name="read-only" value={value} readOnly />
                </Box>
            </div>
            <div className="comment">
                <Typography variant="h5">"Świetne ceny i zróżnicowane produkty"</Typography>
                <Typography variant="h6">Vivienne</Typography>
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Rating name="read-only" value={value} readOnly />
                </Box>
            </div>
            <div className="comment">
                <Typography variant="h5">"Codziennie znajduje tu coś dla siebie"</Typography>
                <Typography variant="h6">Jacob</Typography>
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Rating name="read-only" value={value} readOnly />
                </Box>
            </div>
            </div>
            <RateUs/>
        </div>
    )
}

export default Comments;
