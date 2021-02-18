import { createStore} from "redux";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./components/styles/style.scss";

import reducer from "./js/reducer";
import App from "./components/app/app";

const store = createStore(reducer);


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("intro")
)

