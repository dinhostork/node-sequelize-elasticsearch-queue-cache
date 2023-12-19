import { ListAllMusics } from '../../../data/useCases/ListAllMusicUseCase';
import { MusicElasticRepository } from '../../../infraestructure/db/elastic/MusicElasticRepository';
import { ListAllMusicsController } from '../../../presentation/app/Music/controllers/ListAllMusic.controller';

export const listAllMusicsControllerFactory = (): ListAllMusicsController => {
	const musicRepository = new MusicElasticRepository();
	const listAllMusicsUseCase = new ListAllMusics(musicRepository);
	return new ListAllMusicsController(listAllMusicsUseCase);
};