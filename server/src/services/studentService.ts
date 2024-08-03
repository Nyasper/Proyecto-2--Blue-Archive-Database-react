import Student from '../../Models/studentModel';
import { FastifyRequest, FastifyReply } from 'fastify';
import { manageParamQuery, manageParamUrl } from './categories';
import * as studentRepository from '../repository/studentRepository';

export const getAllCharas = async () =>
	await studentRepository.getAllStudents();

export async function getCharaByCharaName(
	req: FastifyRequest<{ Params: { charaName: string } }>,
	res: FastifyReply
) {
	try {
		const { charaName } = req.params;
		const chara = await Student.findOne({ charaName });
		if (!chara) {
			return res.status(404).send({ message: 'character not found' });
		}
		return res.send(chara);
	} catch (error) {
		console.error(error);
		return res.status(500).send({ error: 'Internal Server Error' });
	}
}

export async function categoryController(
	req: FastifyRequest<{
		Querystring: { value: string };
		Params: { categoryName: string };
	}>,
	res: FastifyReply
) {
	const existParams = Object.keys(req.query).length > 0;

	if (existParams) {
		return await manageParamQuery(req, res, Student);
	}
	if (req.params.categoryName) {
		return await manageParamUrl(req, res, Student);
	}
	return res.status(400).send({ message: 'Bad Request' });
}

export async function getAllSchoolsNames(
	req: FastifyRequest,
	res: FastifyReply
) {
	try {
		const schools = await Student.find({}).sort({ name: 1 }).distinct('school');
		if (!schools) {
			throw new Error('Error trying getting all schools');
		}
		return res.status(200).send(schools);
	} catch (error) {
		console.error(error);
		return res.status(500).send({ error: 'Internal Server Error' });
	}
}
