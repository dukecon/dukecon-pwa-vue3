import { createStore } from "vuex";
import { loadConferenceData, loadMetadata } from '@/js-modules/api';
import { eventMatches } from '@/js-modules/filter';

export const store = createStore({
	strict: true,
	state: {
		searchString: '',
		filters: {},
		id: "javaland2019",
		name: "New Vue3",
		url: "http://www.dukecon.org",
		homeUrl: "http://www.javaland.eu",
		loginEnabled: true,
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
		initialize: (state, metaData) => {
			state.id = metaData.id;
		},
		setSearchString: (state, newValue) => {
			state.searchString = newValue;
		},
		updateConferences: (state, conferences) => {
			state.name = conferences.name;
			state.url = conferences.url;
			state.homeUrl = conferences.homeUrl;
			state.events = conferences.events;
			state.speakers = conferences.speakers;
			// TODO ...
		}
	},
	actions: {
		init: async({ commit }) => {
			const result = await loadMetadata();
			commit('initialize', result);
		},
		setSearchString: ({ commit }, newValue) => {
			commit('setSearchString', newValue);
		},
		load: async ({ commit, state }) => {
			const result = await loadConferenceData(state.id);
			commit('updateConferences', result);
		}
	},
	modules: {}
});
export type store = typeof store;
