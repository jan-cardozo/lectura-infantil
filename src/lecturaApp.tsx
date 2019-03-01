import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from "redux";
import Administration from "./components/Administration";
import stateReducer from "./state/reducers";

const store = createStore(stateReducer);

ReactDOM.render(<Administration />, document.getElementById('app'));