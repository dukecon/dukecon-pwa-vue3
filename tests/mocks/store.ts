import { Store } from '@/store';
import conference from '../../public/rest/conferences/javaland2019.json';
import metaData from '../../public/rest/init.json';

import { Api } from '@/utils/api';

const api: Api = {
	loadConferenceData: () => Promise.resolve(conference),
	loadMetadata: () => Promise.resolve(metaData)
}

export const mockStore = Store(api);
