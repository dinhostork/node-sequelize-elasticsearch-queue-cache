import { MusicDTO } from '../../../domain/dtos/Music.dto';
import { CreateMusicUseCase } from '../../../domain/useCases/CreateMusic';
import { HttpRequest, HttpResponse } from '../../../shared/http/http.protocol';
import { ok } from '../../../shared/http/httpCodesHelper';
import { Controller } from '../../protocols/controller';

export class CreateMusicController implements Controller {
	constructor(private readonly createMusic: CreateMusicUseCase) {}
	async handle(request: HttpRequest): Promise<HttpResponse>{
		console.log(request);
		const { name, lyrics, youtubeLink } = request.body as MusicDTO;
		const music = await this.createMusic.create({ name, lyrics, youtubeLink });
		return ok(music);
	}
}