import axios from 'axios';
// config
import { API_URL } from '../config';
// helper methods
import { jsonToQuery } from '../utils/helpers';

export const getLaunchesList = async (filters = {}) => {
	try {
		const query = jsonToQuery(filters);
		const response = await axios.get(`${API_URL}${query}`);
		return { data: response?.data };
	} catch (error) {
		console.log(error);
		return { error };
	}
};