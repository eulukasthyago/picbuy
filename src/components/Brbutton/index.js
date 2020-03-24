import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Classes, Button } from '@blueprintjs/core';

export default function Brbutton(props) {

    function RenderButton () {
        if(props.to) {
            return (
                <Link className={props.className + ' ' + Classes.BUTTON} to={props.to}>
                    {props.icon? (<Icon icon={props.icon}/>) : ''}
                    <span className={Classes.BUTTON_TEXT}>
                        {props.text}
                    </span>
                </Link>
            )
        }else{
            return <Button className={props.className} icon={props.icon} text={props.text} />
        }
    }

    return (
        <RenderButton/>
    );
}