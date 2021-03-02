// Place all helpers method in this file

// Method to return a range of years as an array
export const getYearRange = (start, end) => {
	const years = [];
	for (let i = start; i <= end; i++) {
		years.push(i.toString());
	}
	return years;
};

// Method to convert json into query string
export const jsonToQuery = (json) => {
	const queryParts = [];
	Object.keys(json).forEach((key) => {
		if (json[key] !== undefined) {
			queryParts.push(encodeURIComponent(key) + "=" + encodeURIComponent(json[key]));
		}
	});
	
	if (queryParts.length) {
		return queryParts.join("&");
	}

	return "";
};