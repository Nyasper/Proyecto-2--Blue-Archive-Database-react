export function handleEnvMode() {
	const envParam = process.env.NODE_ENV ?? '';
	const isProductionEnviromnment = envParam === 'prod';

	return {
		clientStaticRoute: isProductionEnviromnment
			? '../../../client/dist'
			: '../../client/dist',
	};
}
