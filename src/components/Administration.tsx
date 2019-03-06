import * as React from "react";
import Form from "./Form";
import Table from "./Table";

export default (props) => (
    <div>
        <Form onSaveWord={props.onSaveWord} />
        <Table words={props.words}/>
    </div>
);