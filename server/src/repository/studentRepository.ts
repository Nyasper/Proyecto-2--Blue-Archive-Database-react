import { connectMongoDB } from '../db/mongo';
import Student from '../../Models/studentModel';

(async () => await connectMongoDB())();

export async function getAllStudents(limit = 0) {
	try {
		if (limit > 0) return await Student.find({}).sort({ school: 1, name: 1 });
		return await Student.find({}).limit(limit).sort({ school: 1, name: 1 });
	} catch (error) {
		console.error(error);
		throw error;
	}
}
