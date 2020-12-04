export type Translation = Record<string, string>

export interface NamedOrderedItem {
	id: Id;
	order: number;
	names: Translation;
	icon: string;
}

export type Id = string;

export interface Talk {
	id: Id;
	start: string;
	end: string;
	title: string;
	abstractText: string;
	demo: boolean;
	simultan: boolean;
	veryPolular: boolean;
	fullyBooked: boolean;
	numberOfFavorites: number;
	keywords: Record<string, string[]>;
	documents: Record<string, string>;
	trackId: string;
	audienceId: string;
	typeId: string;
	locationId: string;
	speakerIds: string[];
	languageId: string;
};

export interface Location extends NamedOrderedItem {
	capacity: number;
}
export interface Language extends NamedOrderedItem {
	code: string;
}

export interface Audience extends NamedOrderedItem {}
export interface EventType extends NamedOrderedItem {}
export interface Track extends NamedOrderedItem {}
