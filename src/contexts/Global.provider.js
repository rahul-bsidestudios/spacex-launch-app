import React, { useState } from "react";
import GlobalContext from "./Global.context";
// services
import { getLaunchesList } from "../services/launchService";
// helper methods
import { jsonToQuery } from "../utils/helpers";

export const GlobalProvider = ({ children }) => {

	const [ launches, setLaunches ] = useState([]);

	const filterLaunches = async (filters = {}) => {
		const query = jsonToQuery(filters, false);
		const newURL = `${window.location.origin}?${query}`;
		window.history.pushState({ path: newURL }, "", newURL);
		const { error, data } = await getLaunchesList(filters);
		if (error) {
			console.log(error);
		}
		else if (data) {	
			setLaunches(data);
		}
	};

	return (
		<GlobalContext.Provider value={{ launches, filterLaunches, setLaunches }}>
			{children}
		</GlobalContext.Provider>
	);
};

