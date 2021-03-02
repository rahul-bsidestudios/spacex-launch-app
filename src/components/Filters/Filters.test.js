import React from "react";
import { shallow } from "enzyme";
import { Filters } from "./index";
import { START_LAUNCH_YEAR } from "../../config";

describe("Test cases for Filters component", () => {
	const mockProps = {
		onFilterChange: jest.fn()
	};
	const component = shallow(<Filters { ...mockProps } />);
	
	test("Should match snapshot", () => {
		expect(component).toMatchSnapshot();
	});

	test("Should call onFilterChange if any filter is clicked", () => {
		component.find("li.filter").at(0).find("button").simulate("click");
		expect(mockProps.onFilterChange).toHaveBeenCalledWith({ launch_year: START_LAUNCH_YEAR.toString() });
	});
});