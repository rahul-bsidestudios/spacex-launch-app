import React, { useContext, useEffect } from "react";
// labels
import { HEADING, DEVELOPED_BY, DEVELOPER } from "../../labels";
// components
import { Filters } from "../../components/Filters";
import { Card } from "../../components/Card";
// Context
import GlobalContext from "../../contexts/Global.context";
// styles
import "./App.css";

function App({ initialState = [] }) {
	const {
		filterLaunches,
		launches,
		setLaunches,
	} = useContext(GlobalContext);
  
	useEffect(() => {
		if (initialState.length) {
			setLaunches(initialState);
		}
	}, [initialState, setLaunches]);

	return (
		<div className="app">
			<header className="header">
				{HEADING}
			</header>
			<div className="container">
				<Filters onFilterChange={filterLaunches} />
				<div className="cards">
					{launches?.map(item => <Card data={item} key={item.flight_number} />)}
				</div>
			</div>
			<div className="footer">
				<label>{DEVELOPED_BY}: </label><span className="developer">{DEVELOPER}</span>
			</div>
		</div>
	);
}

export default App;
