import type { MetaData } from '@/types';
import type { state } from './';

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

};

export const mutations = {
	initialize: (state: state, metaData: MetaData) => {
		state.metaData.id = metaData.id;
		state.metaData.name = metaData.name || defaultTitle;
		state.metaData.url = metaData.url || defaultUrl;
		state.metaData.homeUrl = metaData.homeUrl || '';
		state.metaData.homeTitle = metaData.homeTitle || '';
		state.metaData.imprint = metaData.imprint;
	},
}

export const actions = {

}