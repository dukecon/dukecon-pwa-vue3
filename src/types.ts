export type { store, state } from '@/store'

export type Translation = Record<string, string>
export type TranslationLinks = Translation;

export interface NamedOrderedItem {
	id: Id;
	order: number;
	names: Translation;
	icon: string;
}

export type Id = string;

export interface MetaData {
	id: Id;
	name?: string;
	year?: string;
	url?: string;
	homeUrl?: string;
	homeTitle?: string;
	imprint?: TranslationLinks;
	termsOfUse?: TranslationLinks;
	privacy?: TranslationLinks;
	startDate: string;
	endDate: string;
	authEnabled?: boolean;
	[key: string]: any;
}

export interface Talk {
	id: Id;
	start: string;
	end: string;
	title: string;
	abstractText: string;
	demo: boolean;
	simultan: boolean;
	veryPopular: boolean;
	fullyBooked: boolean;
	numberOfFavorites: number;
	keywords?: Record<string, string[]>;
	documents?: Record<string, string | undefined | null>;
	trackId: string;
	audienceId: string;
	typeId: string;
	locationId: string;
	speakerIds: string[];
	languageId: string;
}

export interface Location extends NamedOrderedItem {
	capacity: number;
}
export interface Language extends NamedOrderedItem {
	code: string;
}

export type Audience = NamedOrderedItem;
export type EventType = NamedOrderedItem;
export type Track = NamedOrderedItem;
