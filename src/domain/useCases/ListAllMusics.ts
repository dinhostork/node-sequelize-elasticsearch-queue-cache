import { MusicDTO } from '../dtos/Music.dto';

export interface ListAllMusicsUseCase {
    listAllMusics(): Promise<MusicDTO[]>
}