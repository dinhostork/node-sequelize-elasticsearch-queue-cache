import { CreateMusic } from '../../local/models/CreateMusic';
import { Music } from '../../local/models/Music';

export interface CreateMusicRepository {
    createMusic: (music: CreateMusic) => Promise<Music>;
}