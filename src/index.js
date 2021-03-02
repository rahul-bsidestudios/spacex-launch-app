import React from "react";
import { hydrate, render } from "react-dom";
import "./index.css";
import { GlobalProvider } from "./contexts/Global.provider";
import App from "./containers/App";
import reportWebVitals from "./reportWebVitals";

// use render for develop mode and hydrate for prod
const renderMethod = module.hot ? render : hydrate;

renderMethod(
	<React.StrictMode>
  	<GlobalProvider>
    	<App initialState={window.__DEFAULT_STATE__} />
		</GlobalProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
