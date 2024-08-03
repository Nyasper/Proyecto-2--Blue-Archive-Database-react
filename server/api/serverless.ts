import app from '../src';
import { FastifyReply } from 'fastify/types/reply';
import { FastifyRequest } from 'fastify/types/request';

export default async (req: FastifyRequest, res: FastifyReply) => {
	await app.ready();
	app.server.emit('request', req, res);
};
