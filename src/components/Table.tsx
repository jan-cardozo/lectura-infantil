import * as React from "react";
import TableItem from "./TableItem";

export default (props) => {
    return (
        <table>
            <thead>
                <th>Palabras</th>
                <th>Imagenes</th>
            </thead>
            <tbody>
                {props.words.map( (item) => { <TableItem name="{item.name}" img="{item.img}" /> } )}
            </tbody>
        </table>
    );
}