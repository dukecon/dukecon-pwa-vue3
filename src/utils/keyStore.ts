export const keystorePrefix = 'dukecon:';

export const saveKey = (key: string, value: any) => {
	if (localStorage) {
		try {
			localStorage.setItem(keystorePrefix + key, JSON.stringify(value));
		} catch (e) {
			console.log('ERROR in saveKey - please check the integrity of your localStorage', e);
		}
	} else {
		console.log('key not saved; local storage not available');
	}
};

export const getKey = (key: string, defaultValue: any) => {
	if (localStorage) {
		let value;
		try {
			value = localStorage.getItem(keystorePrefix + key);
			return value ? JSON.parse(value) : defaultValue;
		} catch (e) {
			if (value) {
				return value;
			} else {
				console.log('ERROR in getKey - key not set', e);
			}
			return defaultValue;
		}
	} else {
		console.log('key not found; local storage not available');
		return defaultValue;
	}
};

export const removeKey = (key: string) => {
	if (localStorage) {
		try {
			localStorage.removeItem(keystorePrefix + key);
		} catch (e) {
			console.log('ERROR in removeKey', e);
		}
	} else {
		console.log('key not found; local storage not available');
	}
};

export const purge = () => {
	if (localStorage) {
		for (const key in localStorage) {
			if (key.startsWith(keystorePrefix)) {
				localStorage.removeItem(key);
			}
		}
	}
}
