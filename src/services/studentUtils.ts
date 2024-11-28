import type { MediaType, Student, WeaponType } from '../models/student.model';

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

export function handleCategoryName(categoryName: keyof Student): string {
	if (categoryName === 'combatClass') return 'Combat class';
	else if (categoryName === 'weaponType') return 'Weapon type';
	else if (categoryName === 'skinSet') return 'Skin';
	else if (categoryName === 'releaseDate') return 'Release date';
	else if (categoryName === 'audioUrl') return 'Audio url';
	else if (categoryName === 'charaName') return 'Character name';
	else if (categoryName === 'pageUrl') return 'Page url';

	return String(categoryName);
}

export function handleCategoryValue(
	categoryName: keyof Student,
	categoryValue: string
): string {
	if (
		categoryName === 'charaName' ||
		categoryName === 'skinSet' ||
		categoryName === 'role' ||
		categoryName === 'voice'
	) {
		return categoryValue.replaceAll('_', ' ');
	} else if (categoryName === 'weaponType') {
		const weaponTypeMapping: Record<WeaponType, string> = {
			HG: 'handgun',
			SG: 'shotgun',
			MG: 'machine gun',
			AR: 'assault rifle',
			SMG: 'submachine gun',
			SR: 'sniper rifle',
			RL: 'rocket launcher',
			FT: 'flame thrower',
			GL: 'grenade launcher',
			RG: 'railgun',
			MT: 'mortar',
		};
		return weaponTypeMapping[categoryValue as WeaponType] || categoryValue;
	}

	if (categoryName === 'releaseDate') {
		return categoryValue.replaceAll('-', '/');
	}

	return categoryValue;
}

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
	'charaName',
	'lastName',
	'birthday',
	'hobbies',
	'voice',
	'createdAt',
	'pageImageFullUrl',
	'pageImageProfileUrl',
	'audioUrl',
	'pageUrl',
	'age',
	'height',
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
