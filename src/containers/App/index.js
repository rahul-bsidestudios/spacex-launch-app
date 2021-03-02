import React, { useContext } from "react";
import PropTypes from "prop-types";
// labels
import { HEADING, DEVELOPED_BY, DEVELOPER } from "../../labels";
// components
import { Filters } from "../../components/Filters";
import Card from "../../components/Card";
// Context
import GlobalContext from "../../contexts/Global.context";
// styles
import "./App.css";

export const App = ({ filters = {} }) => {
	const {
		filterLaunches,
		launches,
	} = useContext(GlobalContext);

	return (
		<div className="app">
			<header className="header">
				{HEADING}
			</header>
			<div className="container">
				<Filters onFilterChange={filterLaunches} initialFilters={filters} />
				<div className="cards">
					{launches?.map(item => <Card data={item} key={item.flight_number} />)}
				</div>
			</div>
			<div className="footer">
				<label>{DEVELOPED_BY}: </label><span className="developer">{DEVELOPER}</span>
			</div>
		</div>
	);
};

App.propTypes = {
	initialState: PropTypes.array,
	filters: PropTypes.object,
};

App.defaultProps = {
	initialState: [],
	filters: {}
};

export default React.memo(App);