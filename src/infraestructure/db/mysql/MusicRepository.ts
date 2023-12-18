import { Music } from '../../../data/local/entities/Music';
import { CreateMusic } from '../../../data/local/models/CreateMusic';
import { CreateMusicRepository } from '../../../data/protocols/db/CreateMusicRepository';

export class MusicRepository implements CreateMusicRepository {
	async createMusic(music: CreateMusic ): Promise<Music> {
		const createdMusic = await Music.create({
			name: music.name,
			lyrics: music.lyrics,
			youtubeLink: music.youtubeLink,
		});
		return createdMusic;
	}
}