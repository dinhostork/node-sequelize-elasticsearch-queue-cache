import { CreateMusic } from '../../../data/useCases/CreateMusicUseCase';
import { MusicRepository } from '../../../infraestructure/db/mysql/MusicRepository';
import { CreateMusicController } from '../../../presentation/app/Music/controllers/CreateMusic.controller';

export const createMusicControllerFactory = (): CreateMusicController => {
	const createMusicRepository = new MusicRepository();
	const createMusicUseCase = new CreateMusic(createMusicRepository);
	return new CreateMusicController(createMusicUseCase);
};