import { CreateMusic } from '../../../data/useCases/CreateMusicUseCase';
import { MusicRepository } from '../../../infraestructure/db/mysql/MusicRepository';
import { BullmqAdapter } from '../../../infraestructure/queue/adapters/BullMqAdapter';
import { CreateMusicController } from '../../../presentation/app/Music/controllers/CreateMusic.controller';
import CreateMusicQueue from '../../../shared/queues/CreateMusicQueue';

export const createMusicControllerFactory = (): CreateMusicController => {
	const createMusicRepository = new MusicRepository();
	const queueAdapter = new BullmqAdapter(CreateMusicQueue.bull);
	const createMusicUseCase = new CreateMusic(createMusicRepository, queueAdapter);
	return new CreateMusicController(createMusicUseCase);
};