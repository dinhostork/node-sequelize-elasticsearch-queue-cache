import { CreateMusicDTO, MusicDTO } from '../../domain/dtos/Music.dto';
import { CreateMusicUseCase } from '../../domain/useCases/CreateMusic';
import { CreateMusicRepository } from '../protocols/db/CreateMusicRepository';

export class CreateMusic implements CreateMusicUseCase {
	constructor(private readonly createMusicRepository: CreateMusicRepository) {}
	async create(music: CreateMusicDTO): Promise<MusicDTO> {
		return await this.createMusicRepository.createMusic(music);
	}
}