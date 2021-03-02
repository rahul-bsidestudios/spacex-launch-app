import React from 'react';
import { shallow } from 'enzyme';
import App from './index';

describe('Test cases for App component', () => {
	const mockProps = {
		initialState: [{
			flight_number: "1",
			mission_name: "Sat-1",
			launch_year: "2006",
			mission_id: [],
			launch_success: true,
			land_success: false,
			links: {
				mission_patch_small: "test.png"
			}
		}],
		filters: {}
	};
	const component = shallow(<App { ...mockProps } />);
	
	test('Should match snapshot', () => {
  	expect(component).toMatchSnapshot();
	});

	test('Should have a header', () => {
		expect(component.find('header').length).toEqual(1);
	});

	test('Should have a container', () => {
		expect(component.find('.container').length).toEqual(1);
	});
});