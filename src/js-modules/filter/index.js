const searchProps = ['id', 'title', 'abstract'];

export const filterFieldsBySearchstring = (array, searchString) => {
	return searchString ?
		array.filter(eventMatches(searchString)) :
		array;
};

function eventMatches(searchString) {
	return event => searchProps.some(prop => event[prop]?.includes(searchString));
}
