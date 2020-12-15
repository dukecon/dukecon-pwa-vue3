import { Commit, createStore } from 'vuex';
import type { MetaData } from '@/types';
import { api as defaultApi, Api } from '@/utils/api';
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

export const actions = (api: Api) => ({
	setSearchString: ({ commit }: { commit: Commit}, newValue: string) => {
		commit('setSearchString', newValue);
	},
	load: async ({ commit, state }: { commit: Commit, state: state } ) => {
		// later: etag, localstore, etc
		commit('setLoadedState', false);
		const metaData: MetaData = await api.loadMetadata();
		commit('initialize', metaData);
		const conferences = await api.loadConferenceData(state.metaData.id);
		commit('updateConferences', conferences);
		commit('setLoadedState', true);
	}
});

export const Store = (api:Api = defaultApi) => createStore({
	strict: true,
	state: State(),
	getters,
	mutations,
	actions: actions(api),
	modules: {}
});

export type store = ReturnType<typeof Store>;
export type state = ReturnType<typeof State>;
