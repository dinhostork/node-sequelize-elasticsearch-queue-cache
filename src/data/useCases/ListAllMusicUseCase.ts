import { ListAllMusicsUseCase } from '../../domain/useCases/ListAllMusics';
import {  MusicDTO } from '../../domain/dtos/Music.dto';
import { FindAllMusicRepository } from '../protocols/db/FIndAllMusicRepository';

export class ListAllMusics implements ListAllMusicsUseCase {
	constructor(private readonly findAllMusicRepository: FindAllMusicRepository) {}
	async listAllMusics(): Promise<MusicDTO[]> {
		return await this.findAllMusicRepository.findAllMusic();
	}
}