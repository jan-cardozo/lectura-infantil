import * as React from "react";

export default (props) => (
    <tr>
        <td><span>{props.word}</span></td>
        <td><img src={props.img} alt=""/></td>
    </tr>
);