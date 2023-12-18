import { httpRequest, httpResponse } from '../../../interfaces/http/http';
import { Controller } from '../protocols/controller';

export class CreateMusicController implements Controller{
	async handle(httpRequest: httpRequest): Promise<httpResponse> {
		return {
			statusCode: 200,
			body: {
				httpRequest
			}
		};
	}
}