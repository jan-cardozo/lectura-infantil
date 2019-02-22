import React from "react";
import ListItem from "./ListItem";

export default function(props) {
    return (
        <ul>
            {props.words.map( (item) => { <ListItem name="{item.name}" img="{item.img}" /> } )}
        </ul>
    );
}