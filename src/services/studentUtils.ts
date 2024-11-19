import type { MediaType, Student } from '../models/student.model';

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
export function getPropertyDataDistinct(
	students: Student[],
	propName: ExcludedCategoriesUrl | 'all'
) {
	if (propName === 'all' || !propName) {
		const allCategories = (
			Object.keys(students[0]) as (keyof Student)[]
		).filter((c) => !categoriesNoUrl.includes(c));

		return allCategories;
	}

	if (categoriesNoUrl.includes(propName)) return [];

	return [...new Set(students.map((s) => s[propName]))];
}

export const handleCategoryName = (
	categoryName: string | number | Date | null
): string => {
	if (categoryName === 'combatClass') return 'combat class';
	if (categoryName === 'weaponType') return 'weapon type';
	if (categoryName === 'skinSet') return 'skin';

	return String(categoryName);
};

// categories to doesn't display on character info:
const categoriesBlackList: (keyof Student)[] = [
	'charaName',
	'pageUrl',
	'pageImageProfileUrl',
	'pageImageFullUrl',
	'audioUrl',
	'createdAt',
];

// categories without links
export const categoriesNoUrl: (keyof Student)[] = [
	'charaName', //TODO: nose si dejar o quitar
	'lastName',
	'birthday',
	'hobbies',
	'voice',
	'createdAt',
	'pageImageFullUrl',
	'pageImageProfileUrl',
	'audioUrl',
	'pageUrl',
];

export type ExcludedCategoriesUrl = Exclude<
	keyof Student,
	| 'charaName'
	| 'lastName'
	| 'birthday'
	| 'hobbies'
	| 'illustrator'
	| 'voice'
	| 'createdAt'
	| 'audioUrl'
>;
