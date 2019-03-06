import * as React from "react";

export default (props) => (
    <li>
        <span>{props.word}</span>
        <img src="{props.img}" alt=""/>
    </li>
);