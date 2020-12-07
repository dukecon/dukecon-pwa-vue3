import { createStore } from "vuex";
import { loadConferenceData, loadMetadata } from '@/utils/api';
import { eventMatches } from '@/utils/filter';
import type { Talk, MetaData } from '@/types';

const defaultTitle = 'DukeCon Vue 3';
const defaultUrl = 'http://www.dukecon.org'

const sortByDate = (a: Talk, b: Talk) : number => a.start.localeCompare(b.start);

export const Store = () => createStore({
	strict: true,
	state: {
		loaded: false,
		searchString: '',
		filters: {},
		metaData: {
			id: '',
			name: '',
			url: '',
			homeUrl: '',
			homeTitle: '',
			authEnabled: true,
			termsOfUse: {},
			imprint: {},
			privacy: {},
		},
		events: [],
		locations: [],
		tracks: [],
		speakers: [],
		audiences: [],
		eventTypes: [],

	},
	getters: {
		filteredBySearchstring: ({ searchString, events }) => {
			return searchString?.length > 2 ?
				events.filter(eventMatches(searchString)) :
				events;
		}
	},
	mutations: {
		initialize: (state, metaData: MetaData) => {
			state.loaded = false;
			state.metaData.id = metaData.id;
			state.metaData.name = metaData.name || defaultTitle;
			state.metaData.url = metaData.url || defaultUrl;
			state.metaData.homeUrl = metaData.homeUrl || '';
			state.metaData.homeTitle = metaData.homeTitle || '';
			state.metaData.imprint = metaData.imprint;
		},
		setSearchString: (state, newValue) => {
			state.searchString = newValue;
		},
		updateConferences: (state, conferences) => {
			state.metaData.name = conferences.name;
			state.metaData.url = conferences.url;
			state.metaData.homeUrl = conferences.homeUrl;
			state.events = conferences.events.sort(sortByDate);
			state.speakers = conferences.speakers;
			state.eventTypes = conferences.eventTypes;
			console.log('Conference updated')
			// TODO ...
			state.loaded = true;
		}
	},
	actions: {
		setSearchString: ({ commit }, newValue) => {
			commit('setSearchString', newValue);
		},
		load: async ({ commit, state }) => {
			// later: etag, localstore, etc
			const metaData: MetaData = await loadMetadata();
			commit('initialize', metaData);
			const conferences = await loadConferenceData(state.metaData.id);
			commit('updateConferences', conferences);

		}
	},
	modules: {}
});
export type store = ReturnType<typeof Store>;
