import { MusicDTO } from '../../../../domain/dtos/Music.dto';
import { CreateMusicUseCase } from '../../../../domain/useCases/CreateMusic';
import { HttpRequest, HttpResponse } from '../../../../shared/http/http.protocol';
import { badRequest, ok, serverError } from '../../../../shared/http/httpCodesHelper';
import { Controller } from '../../../protocols/controller';
import { MissingFieldError } from '../errors/MissingFieldError';

export class CreateMusicController implements Controller {
	constructor(private readonly createMusic: CreateMusicUseCase) {}
	async handle(request: HttpRequest): Promise<HttpResponse>{
		try{
			const { name, lyrics, youtubeLink } = request.body as MusicDTO;
			const requiredFields = ['name', 'lyrics', 'youtubeLink'];
			for (const field of requiredFields) {
				if (!(request.body as Record<string, unknown>)[field]) {
					return badRequest(new MissingFieldError(field));
				}
			}
			const music = await this.createMusic.create({ name, lyrics, youtubeLink });
			return ok(music);
		}catch(error){
			return serverError();
		}
	}
}