import { HttpRequest, HttpResponse } from '../../../shared/http/http.protocol';
import { ok } from '../../../shared/http/httpCodesHelper';
import { Controller } from '../../protocols/controller';

export class CreateMusicController implements Controller {
	async handle(request: HttpRequest): Promise<HttpResponse>{
		return ok(request);
	}
}