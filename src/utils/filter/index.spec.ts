import type { Talk } from '@/types';
import { eventMatches } from '@/utils/filter';

const talk: Talk = {
	"id": "569574",
	"start": "2019-03-19T13:00:00",
	"end": "2019-03-19T13:40:00",
	"title": "From EventStorming to CoDDDing",
	"abstractText": "To really understand what our users need so that we can build the right thing, we want to have a first-hand experience!",
	"demo": true,
	"simultan": false,
	"veryPopular": true,
	"fullyBooked": false,
	"numberOfFavorites": 0,
	"trackId": "4",
	"audienceId": "1",
	"typeId": "2",
	"locationId": "22",
	"speakerIds": [
		"382278",
		"382679"
	],
	"languageId": "2"
 };


describe('foo', () => {
	it('matches in id, title or abstract, case insensitive', () => {
		expect (eventMatches('569')(talk)).toBe(true);
		expect (eventMatches('ddd')(talk)).toBe(true);
		expect (eventMatches('OUR')(talk)).toBe(true);
	});
	it('does not match other fields', () => {
		expect (eventMatches('382')(talk)).toBe(false);
		expect (eventMatches('22')(talk)).toBe(false);
		expect (eventMatches('qwerrtz')(talk)).toBe(false);
	});

});