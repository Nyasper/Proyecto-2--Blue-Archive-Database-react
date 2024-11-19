import type { MediaType, Student } from '../models/student.model';

// categories to doesn't display on character info:
const categoriesBlackList: (keyof Student)[] = [
	'charaName',
	'pageUrl',
	'pageImageProfileUrl',
	'pageImageFullUrl',
	'audioUrl',
];

// categories without links
export const categoriesNoUrl: (keyof Student)[] = [
	'lastName',
	'birthday',
	'hobbies',
	'voice',
];

//get all the keys that doesn't are undefined.
export function getKeysWithoutNull(
	student: Student | undefined
): (keyof Student)[] {
	if (!student) return [];

	const keys = Object.keys(student) as (keyof Student)[];
	return keys.filter((k) => student[k] && !categoriesBlackList.includes(k));
}

export function getStudentMedia(
	chara: Partial<Student>,
	mediaType: MediaType
): string {
	if (!chara.charaName || !chara.school) return '';

	const mediaFolder = 'media';

	if (mediaType === 'imgProfile')
		return `/${mediaFolder}/${chara.school}/${chara.charaName}.png`;
	if (mediaType === 'imgFull')
		return `/${mediaFolder}/${chara.school}/${chara.charaName}_full.png`;
	if (mediaType === 'audio')
		return `/${mediaFolder}/${chara.school}/${chara.charaName}.ogg`;

	throw new Error('Error on "getStudentMedia", media type not supported');
}

export const manageCategoryName = (categoryName: keyof Student) => {
	if (categoryName === 'combatClass') return 'combat class';
	if (categoryName === 'weaponType') return 'weapon type';
	if (categoryName === 'skinSet') return 'skin';
	return categoryName;
};
