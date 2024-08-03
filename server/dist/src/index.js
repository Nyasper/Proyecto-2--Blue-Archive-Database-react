"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const static_1 = __importDefault(require("@fastify/static"));
const charaRoutes_1 = __importDefault(require("./routes/charaRoutes"));
const node_path_1 = __importDefault(require("node:path"));
const envHandler_1 = require("./services/envHandler");
const app = (0, fastify_1.default)();
const { clientStaticRoute } = (0, envHandler_1.handleEnvMode)();
// app.register(cors, { origin: true, methods: ['GET'] });
// routes
app.register(charaRoutes_1.default, { prefix: '/api/chara' });
// static files for front end
app.register(static_1.default, {
    root: node_path_1.default.join(__dirname, clientStaticRoute),
    prefix: '/',
});
app.setNotFoundHandler((_, res) => {
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
exports.default = app;
