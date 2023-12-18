import { ListAllMusicsUseCase } from '../../../../domain/useCases/ListAllMusics';
import { HttpResponse } from '../../../../shared/http/http.protocol';
import { ok, serverError } from '../../../../shared/http/httpCodesHelper';
import { Controller } from '../../../protocols/controller';

export class ListAllMusicsController implements Controller {
	constructor(private readonly listAllMusics: ListAllMusicsUseCase) {}
	async handle(): Promise<HttpResponse> {
		try{
			const musics = await this.listAllMusics.listAllMusics();
			return ok(musics);
		}catch(err){
			return serverError();
		}
	}
}