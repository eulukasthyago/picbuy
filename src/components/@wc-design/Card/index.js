import React from 'react';

const Card = (props) => {

    return (
        <div className={`wc-card ${props.className}`}>
            {props.children}
        </div>
    );

}

export default Card;