import type { MetaData } from '@/types';
import type { state } from './';
import type { Translation } from '@/types';

// export for testing
export const defaultTitle = 'DukeCon Vue 3';
export const defaultUrl = 'http://www.dukecon.org'

export const MetaDataState = (): MetaData => ({
	id: '',
	name: '',
	year: '',
	url: '',
	homeUrl: '',
	homeTitle: '',
	authEnabled: true,
	termsOfUse: {},
	imprint: {},
	privacy: {},
	startDate: '',
	endDate: '',
});

export const getters = {
	footerLinks: (state: state): Record<string, Translation | undefined> => {
		const links:Record<string, Translation> = {};

		if (state.metaData.imprint) {
			links.imprint = state.metaData.imprint;
		}
		if (state.metaData.termsOfUse) {
			links.termsOfUse = state.metaData.termsOfUse;
		}
		if (state.metaData.privacy) {
			links.privacy = state.metaData.privacy;
		}

		return links;
	}

};

export const mutations = {
	initialize: (state: state, metaData: MetaData) => {
		state.metaData = { ...metaData};
		state.metaData.name = metaData.name || defaultTitle;
		state.metaData.url = metaData.url || defaultUrl;
		state.metaData.homeUrl = metaData.homeUrl || defaultUrl;
	},
}

export const actions = {

}
