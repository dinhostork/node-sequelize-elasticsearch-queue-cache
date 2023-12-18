import { CreateMusicDTO,  MusicDTO } from '../dtos/Music.dto';

export interface CreateMusicUseCase {
    create: (music: CreateMusicDTO) => Promise<MusicDTO>;
}