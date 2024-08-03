import Fastify from 'fastify';
import fastifyStatic from '@fastify/static';
import type { FastifyReply } from 'fastify/types/reply';
import charaRoutes from './routes/charaRoutes';
import path from 'node:path';
import { handleEnvMode } from './services/envHandler';

const app = Fastify();

const { clientStaticRoute } = handleEnvMode();
// app.register(cors, { origin: true, methods: ['GET'] });
// routes
app.register(charaRoutes, { prefix: '/api/chara' });

// static files for front end
app.register(fastifyStatic, {
	root: path.join(__dirname, clientStaticRoute),
	prefix: '/',
});

app.setNotFoundHandler((_, res: FastifyReply) => {
	res.sendFile('index.html');
});

const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;
app
	.listen({ port })
	.then(() => {
		console.log(`app running on http://localhost:${port}`);
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});

export default app;

// "build": "npm-run-all --parallel build:client build:server",
