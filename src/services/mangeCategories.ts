import type { Student } from '../models/student.model';

export function getImgSrc(categoryName: keyof Student) {
	const folder = '/extras/';
	const imgCategories = ['category', 'school', 'weaponType', 'skinSet'];

	const validImgCategory = imgCategories.find(
		(category) => category === categoryName
	);
	if (validImgCategory) {
		return folder + validImgCategory;
	}
	return null;
}

export const manageCategoryName = (categoryName: keyof Student) => {
	if (categoryName === 'name') return 'Name';
	if (categoryName === 'age') return 'Age';
	if (categoryName === 'school') return 'School';
	if (categoryName === 'designer') return 'Designer';
	if (categoryName === 'illustrator') return 'Illustrator';
	if (categoryName === 'voice') return 'Voice';
	if (categoryName === 'role') return 'Role';
	if (categoryName === 'combatClass') return 'Combat Class';
	if (categoryName === 'weaponType') return 'Weapon Type';
	if (categoryName === 'skinSet') return 'Skin Set';
	return categoryName;
};
