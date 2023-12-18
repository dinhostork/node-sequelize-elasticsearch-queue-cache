import { Music } from '../../local/models/Music';

export interface FindAllMusicRepository {
    findAllMusic(): Promise<Music[]>
}