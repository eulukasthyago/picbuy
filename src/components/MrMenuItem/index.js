import React from 'react';
import { Classes, Icon, MenuItem } from "@blueprintjs/core";
import { Link } from 'react-router-dom'

export default function MrmenuItem(props){
    return(
        <li>
            {props.to ? (
                <Link className={`${Classes.MENU_ITEM} ${Classes.POPOVER_DISMISS}`} tabIndex={0} to={props.to ?? props.to}>
                    {props.icon? (<Icon icon={props.icon}/>) : ''}
                    <div className={`${Classes.TEXT_OVERFLOW_ELLIPSIS} ${Classes.FILL}`}>{props.text}</div>
                </Link>
            ) : (
              <MenuItem icon={props.icon} text={props.text}/>  
            )}
        </li>
    )
}