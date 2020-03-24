import React from 'react';

const CardBody = (props) => {

    return (
        <div className={`wc-card-body ${props.className}`}>
            {props.children}
        </div>
    );

}

export default CardBody;