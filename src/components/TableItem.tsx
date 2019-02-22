import * as React from "react";

export default (props) => {
    return (
        <li>
            <span>{props.name}</span>
            <img src="{props.img}" alt=""/>
        </li>
    );
}