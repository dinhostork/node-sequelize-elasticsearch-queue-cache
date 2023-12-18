import { Request, Response } from 'express';
import { Controller } from '../../../presentation/protocols';
import { HttpRequest, HttpResponse } from '../../../shared/http/http.protocol';

export const adaptRoute = (controller: Controller) => {
	return async (req: Request, res: Response) => {
		const httpRequest: HttpRequest = {
			headers: req.headers,
			query: req.query,
			body: req.body,
			params: req.params,
		};
		const httpResponse: HttpResponse = await controller.handle(httpRequest);
		res.status(httpResponse.statusCode).json(httpResponse.body);
	};
};