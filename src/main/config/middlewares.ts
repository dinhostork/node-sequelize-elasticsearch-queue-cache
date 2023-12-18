import { Express } from 'express';
import { bodyParser } from '../middlewares/bodyParser/bodyParser';
import { corsMiddleware } from '../middlewares/cors/cors';
import { contentTypeJson } from '../middlewares/contentType/contentType';

export default (app: Express): void => {
	app.use(bodyParser);
	app.use(corsMiddleware);
	app.use(contentTypeJson);
};