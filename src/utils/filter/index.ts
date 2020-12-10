import type { Talk } from '@/types';

const searchProps: (keyof Talk)[] = ['id', 'title', 'abstractText'];  // TODO: resolve Speakernames, track and location

export function eventMatches(searchString: string) {
	const searchStringLowerCase = searchString.toLowerCase();
	return (event: Talk) => searchProps.some(prop => String(event[prop]).toLowerCase().includes(searchStringLowerCase));
}
