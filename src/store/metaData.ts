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
		return { 
			imprint: state.metaData.imprint || {}, 
			termsOfUse: state.metaData.termsOfUse || {}, 
			privacy: state.metaData.privacy || {}
		};
	}

};

export const mutations = {
	initialize: (state: state, metaData: MetaData) => {
		state.metaData = {...metaData};
		state.metaData.name = metaData.name || defaultTitle;
		state.metaData.url = metaData.url || defaultUrl;
		console.log(JSON.stringify(metaData, null, ' '));
	},
}

export const actions = {

}