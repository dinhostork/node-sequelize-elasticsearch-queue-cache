import { CreateMusicDTO, MusicDTO } from '../../domain/dtos/Music.dto';
import { CreateMusicUseCase } from '../../domain/useCases/CreateMusic';
import { QueueAdapterProtocol } from '../../shared/queues/protocols/queues.protocol';
import { CreateMusicRepository } from '../protocols/db/CreateMusicRepository';

export class CreateMusic implements CreateMusicUseCase {
	constructor(private readonly createMusicRepository: CreateMusicRepository, private readonly queueAdapter: QueueAdapterProtocol) {}
	async create(music: CreateMusicDTO): Promise<MusicDTO> {
		const createdMusic = await this.createMusicRepository.createMusic(music);
		const result = await this.queueAdapter.addJob('CREATED_MUSIC', createdMusic);
		console.log(result);
		return createdMusic;
	}
}