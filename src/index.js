import React from "react";
import { hydrate } from "react-dom";
import "./index.css";
import { GlobalProvider } from "./contexts/Global.provider";
import App from "./containers/App";
import reportWebVitals from "./reportWebVitals";

// use render for develop mode and hydrate for prod
const renderMethod = hydrate;

renderMethod(
	<React.StrictMode>
  	<GlobalProvider initialData={window.__DEFAULT_STATE__}>
    	<App filters={window.__DEFAULT_QUERY__} />
		</GlobalProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
