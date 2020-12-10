import { Commit, createStore } from 'vuex';
import type { MetaData } from '@/types';
import { loadConferenceData, loadMetadata } from '@/utils/api';
import { MetaDataState, getters as metaDataGetters, mutations as metaDataMutations } from './metaData';
import { ConferenceData, getters as conferenceDataGetters, mutations as conferenceDataMutations } from './conferenceData';
import { FilterData } from './filterData';

export const State = () => ({
	loaded: false,
	searchString: '',
	filters: FilterData(),
	metaData: MetaDataState(),
	...ConferenceData(),
})

export const getters = {
	...metaDataGetters,
	...conferenceDataGetters,
}

export const mutations = {
	...metaDataMutations,
	...conferenceDataMutations,
	setSearchString: (state: state, newValue: string) => {
		state.searchString = newValue;
	},
	setLoadedState: (state: state, newValue: boolean) => {
		state.loaded = newValue;
	}
}

export const actions = {
	setSearchString: ({ commit }: { commit: Commit}, newValue: string) => {
		commit('setSearchString', newValue);
	},
	load: async ({ commit, state }: { commit: Commit, state: state } ) => {
		// later: etag, localstore, etc
		commit('setLoadedState', false);
		const metaData: MetaData = await loadMetadata();
		commit('initialize', metaData);
		const conferences = await loadConferenceData(state.metaData.id);
		commit('updateConferences', conferences);
		commit('setLoadedState', true);
	}
}

export const Store = (customActions: Record<string, any> = actions) => createStore({
	strict: true,
	state: State(),
	getters,
	mutations,
	actions: customActions,
	modules: {}
});

export type store = ReturnType<typeof Store>;
export type state = ReturnType<typeof State>;
