import type { state } from './';
import { eventMatches } from '@/utils/filter';
import type { Talk } from '@/types';

const sortByDate = (a: Talk, b: Talk) : number => a.start.localeCompare(b.start);

export const ConferenceData = () => ({
	events: [],
	locations: [],
	tracks: [],
	speakers: [],
	audiences: [],
	eventTypes: [],
});

export const getters = {
	filteredBySearchstring: ({ searchString, events }: state ) => {
		return searchString?.length > 2 ?
			events.filter(eventMatches(searchString)) :
			events;
	}
};

export const mutations = {
	updateConferences: (state: state, conferences: any) => {
		state.metaData.name = conferences.name;
		state.metaData.url = conferences.url;
		state.metaData.homeUrl = conferences.homeUrl;
		state.events = conferences.events.sort(sortByDate);
		state.speakers = conferences.speakers;
		state.eventTypes = conferences.eventTypes;
		console.log('Conference updated')
		// TODO ...
	}
}

export type conference = ReturnType<typeof ConferenceData>;
