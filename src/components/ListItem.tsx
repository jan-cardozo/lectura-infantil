import React from "react";

export default function(props) {
    return (
        <li>
            <span>{props.name}</span>
            <img src="{props.img}" alt=""/>
        </li>
    );
}