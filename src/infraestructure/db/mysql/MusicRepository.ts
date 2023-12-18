import { CreateMusic } from '../../../data/local/models/CreateMusic';
import { Music } from '../../../data/local/models/Music';
import { CreateMusicRepository } from '../../../data/protocols/db/CreateMusicRepository';

export class MusicRepository implements CreateMusicRepository {
	async createMusic(music: CreateMusic ): Promise<Music> {
		return Promise.resolve({
			...music,
			id: '1',
		});
	}
}