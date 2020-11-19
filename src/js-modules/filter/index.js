const searchProps = ['id', 'title', 'abstract'];

export const filterFieldsBySearchstring = (array, searchString) => {

	if (searchString) {
		return array.filter((item) => {
			for (const prop of searchProps) {
				if (item[prop]) {
					return item[prop].includes(searchString);
				}
				return false;
			}
			item.title.includes(searchString)
		});
	} else {
		return array;
	}
};
