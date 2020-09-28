import React from 'react';
import './dashboard.css';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

function Comments() {
    const [value] = React.useState(5);
    return (
        <div className="comments__container">
            <div className="comment">
                <h2 className="comment__title">"Best shopping website i've ever used"</h2>
                <h3 className="comment__author">John B.</h3>
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Rating name="read-only" value={value} readOnly />
                </Box>
            </div>
            <div className="comment">
                <h2 className="comment__title">"Świetne ceny i zróżnicowane produkty"</h2>
                <h3 className="comment__author">Vivienne</h3>
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Rating name="read-only" value={value} readOnly />
                </Box>
            </div>
            <div className="comment">
                <h2 className="comment__title">"Codziennie znajduje tu coś dla siebie"</h2>
                <h3 className="comment__author">Jacob</h3>
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Rating name="read-only" value={value} readOnly />
                </Box>
            </div>
        </div>
    )
}

export default Comments;
