// categories to doesn't display on character info:
const categoriesBlackList = [
	'_id',
	'charaName',
	'pageUrl',
	'pageImageProfileUrl',
	'pageImageFullUrl',
	'audioUrl',
	'files',
];

// categories without links
export const categoriesNoUrl = ['lastName', 'birthday', 'hobbies', 'voice'];

//get all the keys that doesn't are undefined.
export function getKeysWithoutUndefined(data) {
	const keys = Object.keys(data);
	return keys.filter((p) => data[p] && !categoriesBlackList.includes(p));
}
