import { CreateMusicDTO, MusicDTO } from '../../../domain/dtos/Music.dto';

export interface CreateMusicRepository {
    createMusic: (music: CreateMusicDTO) => Promise<MusicDTO>;
}