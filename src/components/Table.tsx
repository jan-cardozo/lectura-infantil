import * as React from "react";
import TableItem from "./TableItem";

export default (props) => (
    <table>
        <thead>
            <th>Palabras</th>
            <th>Imagenes</th>
        </thead>
        <tbody>
            {props.words.map( (item) => { <TableItem word="{item.word}" img="{item.img}" /> } )}
        </tbody>
    </table>
);