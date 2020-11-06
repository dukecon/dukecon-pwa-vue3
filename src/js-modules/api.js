const baseGetUrl = "/rest/conferences/";
const postUrl = "/json.php?";

const postResultHandler = (result) => {
	if (result.status === 200) {
		console.log('Saved to server');
	} else {
		throw `Save failed: ${result.status} - ${result.statusText}`
	}
}

const fetchJson = (relativePath) => {
	console.log('getting data from server...');
	return fetch(baseGetUrl + relativePath)
			.then((response) => response.json())
			.then((json) => json);
};


const writeJson = async (data, queryString = '') => {
	const postOptions = {
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		method: "POST",
		body: JSON.stringify(data, null, ' ')
	}
	return fetch(postUrl + queryString, postOptions)
		.then((result) => postResultHandler(result));
};

export const saveHorses = async (horses, queryString = '') => {
	console.log(`Write ${horses?.length} horses`);
	await writeJson(horses, queryString);
};

export const getConferenceData = async () => {
	const horses = await fetchJson('horses.json');
	return horses;
};

