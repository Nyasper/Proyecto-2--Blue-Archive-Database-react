"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleEnvMode = void 0;
function handleEnvMode() {
    var _a;
    const envParam = (_a = process.env.NODE_ENV) !== null && _a !== void 0 ? _a : '';
    const isProductionEnviromnment = envParam === 'prod';
    return {
        clientStaticRoute: isProductionEnviromnment
            ? '../../../client/dist'
            : '../../client/dist',
    };
}
exports.handleEnvMode = handleEnvMode;
