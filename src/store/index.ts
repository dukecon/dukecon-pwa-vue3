import { createStore } from 'vuex';
import type { MetaData } from '@/types';
import { loadConferenceData, loadMetadata } from '@/utils/api';
import { MetaDataState, mutations as metaDataMutations } from './metaData';
import { ConferenceData, getters as conferenceDataGetters, mutations as conferenceDataMutations } from './conferenceData';
import { FilterData } from './filterData';

const State = () => ({
	loaded: false,
	searchString: '',
	filters: FilterData(),
	metaData: MetaDataState(),
	...ConferenceData(),
})

export const Store = () => createStore({
	strict: true,
	state: State(),
	getters: {
		...conferenceDataGetters,
	},
	mutations: {
		...metaDataMutations,
		...conferenceDataMutations,
		setSearchString: (state: state, newValue: string) => {
			state.searchString = newValue;
		},
		setLoadedState: (state: state, newValue: boolean) => {
			state.loaded = newValue;
		}
	},
	actions: {
		setSearchString: ({ commit }, newValue) => {
			commit('setSearchString', newValue);
		},
		load: async ({ commit, state : state } ) => {
			// later: etag, localstore, etc
			commit('setLoadedState', false);
			const metaData: MetaData = await loadMetadata();
			commit('initialize', metaData);
			const conferences = await loadConferenceData(state.metaData.id);
			commit('updateConferences', conferences);
			commit('setLoadedState', true);
		}
	},
	modules: {}
});
export type store = ReturnType<typeof Store>;
export type state = ReturnType<typeof State>;
