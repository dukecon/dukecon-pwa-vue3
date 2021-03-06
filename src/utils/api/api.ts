const baseGetUrl = '/rest/';
const conferencesUrl = 'conferences/';
const postUrl = '/json.php?';

const postResultHandler = (result: any) => {
	if (result.status === 200) {
		console.log('Saved to server');
	} else {
		throw `Save failed: ${result.status} - ${result.statusText}`
	}
}

const fetchJson = (relativePath: string) => {
	console.log(`getting data from ${relativePath}...`);
	return fetch(baseGetUrl + relativePath)
			.then((response) => response.json())
			.then((json) => json);
};


const writeJson = async (data: any, queryString = '') => {
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

export const saveHorses = async (data: any, queryString = '') => {
	console.log(`Write ${data?.length} entries`);
	await writeJson(data, queryString);
};

export const loadConferenceData = async (conferenceId: string) => {
	return fetchJson(conferencesUrl + conferenceId + '.json');
};

export const loadMetadata = async () => {
	return fetchJson('init.json');
};

export const loadImages = async () => {
	return fetchJson('image-resources.json');
};

export const api = {
	loadMetadata,
	loadConferenceData
}

export type Api = typeof api;
