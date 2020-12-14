import { default as en } from './en.json';
import { default as de } from './de.json';
import { createI18n } from 'vue-i18n';

export const availableLanguages = ['de', 'en'];

export function I18n(startLocale: string = 'de') {
	return createI18n({
		legacy: false,
		globalInjection: true,
		locale: startLocale,
		messages: {	de,	en }
	});
}

