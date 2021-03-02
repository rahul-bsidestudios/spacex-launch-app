import React from "react";

const INITIAL_STATE = {
	launches: [],
	filterLaunches: () => {},
	setLaunches: () => {}
};

const GlobalContext = React.createContext(INITIAL_STATE);

export default GlobalContext;