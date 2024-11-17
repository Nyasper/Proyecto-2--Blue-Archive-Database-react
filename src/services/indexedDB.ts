import Dexie from 'dexie';
import type { Student } from '../models/student.model';

class IndexedDb {
	// instanceDB
	#db: Dexie;
	// entities
	#characters: Student[] = [];

	#tablePK = '_id';
	#tableIndexes = [
		'charaName',
		'name',
		'school',
		'role',
		'combatClass',
		'weaponType',
		'age',
		'height',
		'designer',
		'illustrator',
		'releaseDate',
		'skinSet',
	];

	constructor(tableName: string) {
		// initialize indexedDB instance
		this.#db = new Dexie('BA_DB'); // DBname
		// createTable and Schema
		this.#db.version(1).stores({
			[tableName]: this.#tablePK + this.#tableIndexes.join(','),
		}); // => tableName : PK, ...keys(for search);
	}

	get charas() {
		return this.#characters;
	}

	async updateDB(data) {
		await this.#characters.bulkPut(data);
		console.log(`Actualizado indexed con ${data.length} elementos`);
	}
}

// const db = new Dexie("BA_DB");
export const db = new IndexedDb('characters');
