import { createStore } from "vuex";
import { loadConferenceData, loadMetadata } from '@/js-modules/api';
import { filterFieldsBySearchstring } from '@/js-modules/filter';

export default createStore({
	strict: true,
	state: {
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
		filteredBySearchstring: (state, searchString) => {
			return filterFieldsBySearchstring(state.events, searchString);
		}
	},
	mutations: {
		initialize: (state, metaData) => {
			state.id = metaData.id;
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
		init: async({ commit}) => {
			const result = await loadMetadata();
			commit('initialize', result);
		},
		load: async ({commit, state}) => {
			const result = await loadConferenceData(state.id);
			commit('updateConferences', result);
		}
	},
	modules: {}
});
