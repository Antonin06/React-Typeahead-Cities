const fs = require('fs-extra');

export const saveData = (city) => {
	const finished = (error) => {
		if (error) {
			console.error(error)
			return;
		}
	}

	const jsonData = JSON.stringify(city);
	fs.writeJson('cities_v2.json', jsonData, finished)
}
