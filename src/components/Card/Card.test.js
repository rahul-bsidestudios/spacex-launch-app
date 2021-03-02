import React from "react";
import { shallow } from "enzyme";
import { Card } from "./index";

describe("Test cases for Card component", () => {
	const mockProps = {
		data: {
			flight_number: "1",
			mission_name: "Sat-1",
			launch_year: "2006",
			mission_id: [],
			launch_success: true,
			land_success: false,
			links: {
				mission_patch_small: "test.png"
			}
		}
	};
	const component = shallow(<Card { ...mockProps } />);
	
	test("Should match snapshot", () => {
		expect(component).toMatchSnapshot();
	});
});