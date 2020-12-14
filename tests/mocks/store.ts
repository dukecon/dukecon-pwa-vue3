import type{ Commit } from 'vuex';
import type { MetaData } from '@/types';
import { Store, actions } from '@/store';

const metaData: MetaData = {
	id: 'my-conference',
	name: 'My Conference',
	year: '1999',
	url: '',
	startDate: '',
	endDate: '',
};
const conferences:any = {
	events: [

	]
};

const myActions = { ...actions };
myActions.load = async ({ commit }: { commit: Commit } ) => {
	commit('setLoadedState', false);
	commit('initialize', metaData);
	commit('updateConferences', conferences);
	commit('setLoadedState', true);
};

export const store = Store(myActions);
