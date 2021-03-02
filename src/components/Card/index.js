import React from "react";
import PropTypes from "prop-types";
// labels
import { MISSION_IDS, LAUNCH_YEAR, SUCCESS_LAUNCH, SUCCESS_LAND } from "../../labels";
// Styles
import "./Card.css";

export const Card = ({ data }) => {
	const {
		flight_number,
		mission_name,
		launch_year,
		mission_id,
		launch_success,
		land_success,
		links,
	} = data || {};
	return (
		<div className="cardWrapper">
			{links?.mission_patch_small && <div className="banner">
				<img alt={mission_name} src={links?.mission_patch_small} />
			</div>}
			<div className="description">
				<div className="title">{mission_name} #{flight_number}</div>
				<section className="stats">
					<div className="row">
						<label>{MISSION_IDS}:</label>
						{!!mission_id?.length && <ul>
							{
								mission_id?.map(id => <li className="value missionId" key={id}>{id}</li>)
							}
						</ul>}
					</div>
					<div className="row">
						<label>{LAUNCH_YEAR}:</label>
						<span className="value">{launch_year}</span>
					</div>
					<div className="row">
						<label>{SUCCESS_LAUNCH}:</label>
						<span className="value">{launch_success?.toString()}</span>
					</div>
					<div className="row">
						<label>{SUCCESS_LAND}:</label>
						<span className="value">{land_success?.toString()}</span>
					</div>
				</section>
			</div>
		</div>
	);
};

Card.propTypes = {
	data: PropTypes.object.isRequired
};