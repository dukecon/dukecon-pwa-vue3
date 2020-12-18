import { Store } from '@/store';
import conference from '@t/mocks/conferences.json';
import metaData from '@t/mocks/metadata.json';

import { Api } from '@/utils/api';

const api: Api = {
	loadConferenceData: () => Promise.resolve(conference),
	loadMetadata: () => Promise.resolve(metaData)
}

export const MockApiStore = () => Store(api);
