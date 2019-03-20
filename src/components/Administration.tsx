import * as React from "react";
import Form from "./Form";
import Table from "./Table";

export default (props) => (
    <div>
        <Form saveWord={props.saveWord} />
        <Table words={props.words}/>
    </div>
);