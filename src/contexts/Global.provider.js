import React, { useState } from "react";
import GlobalContext from "./Global.context";
import { getLaunchesList } from "../services/launchService";

export const GlobalProvider = ({ children }) => {
	
	const [ launches, setLaunches ] = useState([]);
	
	const filterLaunches = async (filters) => {
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

