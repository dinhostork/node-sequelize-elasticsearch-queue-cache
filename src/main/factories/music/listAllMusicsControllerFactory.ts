import { ListAllMusics } from '../../../data/useCases/ListAllMusicUseCase';
import { MusicRepository } from '../../../infraestructure/db/mysql/MusicRepository';
import { ListAllMusicsController } from '../../../presentation/app/Music/controllers/ListAllMusic.controller';

export const listAllMusicsControllerFactory = (): ListAllMusicsController => {
	const musicRepository = new MusicRepository();
	const listAllMusicsUseCase = new ListAllMusics(musicRepository);
	return new ListAllMusicsController(listAllMusicsUseCase);
};