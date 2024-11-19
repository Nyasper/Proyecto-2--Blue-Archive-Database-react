export interface Student {
	readonly charaName: string;
	readonly name: string;
	readonly lastName: string;
	readonly school: string;
	readonly role: Role;
	readonly combatClass: CombatClass;
	readonly weaponType: WeaponType;
	readonly age: number | null;
	readonly birthday: null | string;
	readonly height: number | null;
	readonly hobbies: string;
	readonly designer: null | string;
	readonly illustrator: string;
	readonly voice: string;
	readonly releaseDate: Date;
	readonly skinSet: string;
	readonly pageUrl: string;
	readonly pageImageProfileUrl: string;
	readonly pageImageFullUrl: string;
	readonly audioUrl: string;
	readonly createdAt: Date;
}

export type CombatClass = 'Special' | 'Striker';

export type Role =
	| 'Healer_Back'
	| 'Tactical Support_Back'
	| 'Tank_Front'
	| 'Support_Front'
	| 'Attacker_Back'
	| 'Attacker_Middle'
	| 'Support_Back'
	| 'Attacker/Middle'
	| 'Support_Middle'
	| 'Attacker_Front'
	| 'Healer_Middle'
	| 'Healer_Front';

type School =
	| 'Abydos'
	| 'Arius'
	| 'Gehenna'
	| 'Hyakkiyako'
	| 'Millennium'
	| 'Red Winter'
	| 'SRT'
	| 'Shanhaijing'
	| 'Trinity'
	| 'Valkyrie'
	| 'other';

export type WeaponType =
	| 'HG'
	| 'SG'
	| 'MG'
	| 'AR'
	| 'SMG'
	| 'SR'
	| 'RL'
	| 'FT'
	| 'GL'
	| 'RG'
	| 'MT';

export type MediaType = 'imgProfile' | 'imgFull' | 'audio';
