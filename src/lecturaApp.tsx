import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from "redux";
import stateReducer from "./state/reducers";
import { Provider } from "react-redux";
import Administration from "./containers/administration";

const store = createStore(stateReducer);

ReactDOM.render(
    <Provider store={store}>
        <Administration />
    </Provider>,
    document.getElementById('app'));