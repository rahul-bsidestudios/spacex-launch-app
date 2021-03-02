import React, { useState } from "react";
import PropTypes from "prop-types";
// utilities
import { getYearRange } from "../../utils/helpers";
// Config and constants
import { START_LAUNCH_YEAR, END_LAUNCH_YEAR } from "../../config";
// labels
import { FILTERS, LAUNCH_YEAR, SUCCESS_LAND, SUCCESS_LAUNCH } from "../../labels";
// Styles
import "./Filters.css";

export const Filters = ({ onFilterChange, initialFilters = {} }) => {
	const [ filters, setFilters ] = useState(initialFilters);

	const toggleFilter = (filter, value) => {
		const newFilters = { ...filters };
		if (filters[filter] === value) {
			newFilters[filter] = undefined;
		}
		else {
			newFilters[filter] = value;
		}
		setFilters(newFilters);
		onFilterChange(newFilters);
	};

	return (
		<div className="filtersWrap">
			<div className="filterTitle">{FILTERS}</div>
			<section>
				<label className="filterLabel">{LAUNCH_YEAR}</label>
				<ul>
					{getYearRange(START_LAUNCH_YEAR, END_LAUNCH_YEAR).map(year =>
						<li className="filter" key={year}>
							<button className={filters.launch_year === year ? "active" : ""} type="button" onClick={() => toggleFilter("launch_year", year)}>{year}</button>
						</li>
					)}
				</ul>
			</section>
			<section>
				<label className="filterLabel">{SUCCESS_LAUNCH}</label>
				<ul>
					<li className="filter">
						<button className={filters.launch_success === "true" ? "active" : ""} type="button" onClick={() => toggleFilter("launch_success", "true")}>True</button>
					</li>
					<li className="filter">
						<button className={filters.launch_success === "false" ? "active" : ""} type="button" onClick={() => toggleFilter("launch_success", "false")}>False</button>
					</li>
				</ul>
			</section>
			<section>
				<label className="filterLabel">{SUCCESS_LAND}</label>
				<ul>
					<li className="filter">
						<button className={filters.land_success === "true" ? "active" : ""} type="button" onClick={() => toggleFilter("land_success", "true")}>True</button>
					</li>
					<li className="filter">
						<button className={filters.land_success === "false" ? "active" : ""} type="button" onClick={() => toggleFilter("land_success", "false")}>False</button>
					</li>
				</ul>
			</section>
		</div>
	);
};

Filters.propTypes = {
	onFilterChange: PropTypes.func.isRequired,
	initialFilters: PropTypes.object
};

Filters.defaultProps = {
	initialFilters: {}
};