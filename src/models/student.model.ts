export interface Student {
	charaName: string;
	name: string;
	lastName: string;
	school: string;
	role: string;
	combatClass: CombatClass;
	weaponType: string;
	age: number | null;
	birthday: string;
	height: number | null;
	hobbies: string;
	designer: string;
	illustrator: string;
	voice: string;
	releaseDate: string;
	skinSet: string;
	pageUrl: string;
	pageImageProfileUrl: string;
	pageImageFullUrl: string;
	audioUrl: string;
}

type CombatClass = 'Striker' | 'Special';
