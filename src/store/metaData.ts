import type { MetaData } from '@/types';
import type { state } from './';
import type { Translation } from '@/types';

const defaultTitle = 'DukeCon Vue 3';
const defaultUrl = 'http://www.dukecon.org'

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
	footerLinks: (state: state): Record<string, Translation> => {
		console.log('####', { 
			imprint: state.metaData.imprint, 
			termsOfUse: state.metaData.termsOfUse, 
			privacy: state.metaData.privacy 
		})
		return { 
			imprint: state.metaData.imprint, 
			termsOfUse: state.metaData.termsOfUse, 
			privacy: state.metaData.privacy 
		};
	}

};

export const mutations = {
	initialize: (state: state, metaData: MetaData) => {
		state.metaData.id = metaData.id;
		state.metaData.name = metaData.name || defaultTitle;
		state.metaData.url = metaData.url || defaultUrl;
		state.metaData.homeUrl = metaData.homeUrl || '';
		state.metaData.homeTitle = metaData.homeTitle || '';
		state.metaData.imprint = metaData.imprint;
		state.metaData.termsOfUse = metaData.termsOfUse;
		state.metaData.privacy = metaData.privacy;
	},
}

export const actions = {

}