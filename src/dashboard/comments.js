import React from 'react';
import './dashboard.css';

function Comments(){
    return(
        <div className="comments_container">
            <div className="comment">
                <h2 className="comment_title">"Best shopping website i've ever used"</h2>
                <h3 className="comment_author">John B.</h3>
            </div>
            <div className="comment">
                <h2 className="comment_title">"Świetne ceny i zróżnicowane produkty"</h2>
                <h3 className="comment_author">Vivienne</h3>
            </div>
            <div className="comment">
                <h2 className="comment_title">"Codziennie znajduje tu coś dla siebie"</h2>
                <h3 className="comment_author">Jacob</h3>
            </div>
        </div>
    )
}

export default Comments