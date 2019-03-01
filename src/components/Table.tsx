import * as React from "react";
import TableItem from "./TableItem";

export default (props) => (
    <table>
        <thead>
            <td>Palabras</td>
            <td>Imagenes</td>
        </thead>
        <tbody>
            {props.words.map( (item) => { <TableItem name="{item.name}" img="{item.img}" /> } )}
        </tbody>
    </table>
);