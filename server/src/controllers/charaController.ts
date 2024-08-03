import { FastifyInstance } from 'fastify';
import * as charaService from '../services/studentService';
import { getAllCategoryes } from '../services/categories';

export async function charaController(app: FastifyInstance) {
	app.get('/', () => 'Chara Controller');

	app.get('/all', charaService.getAllCharas);

	app.get('/:charaName', charaService.getCharaByCharaName);

	app.get('/category/all', getAllCategoryes);

	app.get('/category/:categoryName', charaService.categoryController);
}
