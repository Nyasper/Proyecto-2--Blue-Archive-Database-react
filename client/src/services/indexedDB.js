import Dexie from 'dexie';
import { mode } from './useFetch';

class IndexedDb {
	// instanceDB
	#db;
	// entities
	#characters = [];

	#tablePK = "_id";
	#tableIndexes = [
		"charaName", "name", "school", "role", "combatClass",
		"weaponType", "age", "height", "designer",
		"illustrator", "releaseDate", "skinSet"
	];

	constructor(tableName) {
		// initialize indexedDB instance
		this.#db = new Dexie("BA_DB"); // DBname
		// createTable and Schema
		this.#db.version(1).stores({ [tableName]: this.#tablePK + "," + this.#tableIndexes.toString() }) // => tableName : PK, ...keys(for seach);
		this.#characters = this.#db[tableName];
	}

	get charas() {
		return this.#characters
	}

	async updateDB(data) {
		await this.#characters.bulkPut(data);
		console.log(`Actualizado indexed con ${data.length} elementos`)
	}

}

// const db = new Dexie("BA_DB");
export const db = new IndexedDb("characters");
