import React from 'react';

const CardTitle = (props) => {
    return (
        <h5 className={`wc-card-title ${props.className}`}>
            {props.children}
        </h5>
    );
}

export default CardTitle;
