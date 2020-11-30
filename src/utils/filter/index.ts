import type { Talk } from '@/types';

const searchProps: (keyof Talk)[] = ['id', 'title', 'abstractText'];

export function eventMatches(searchString: string) {
	const searchStringLowerCase = searchString.toLowerCase();
	return (event: Talk) => searchProps.some(prop => event[prop]?.toLowerCase().includes(searchStringLowerCase));
}