import { Express, Router } from 'express';
import { readdirSync } from 'fs';
import { join } from 'path';


export default (app: Express): void => {
	const router = Router();
	app.use('/api/v1', router);
	
	const routesDir = join(__dirname, '../routes');
	readdirSync(routesDir, { recursive: true }).map(async file => {
		if (file.includes('.routes.')) {
			(await import(`${routesDir}/${file}`)).default(router);
		}
	});
};