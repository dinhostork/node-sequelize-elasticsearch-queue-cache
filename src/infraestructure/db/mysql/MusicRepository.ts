import { Music } from '../../../data/local/entities/Music';
import { CreateMusic } from '../../../data/local/models/CreateMusic';
import { CreateMusicRepository } from '../../../data/protocols/db/CreateMusicRepository';
import { FindAllMusicRepository } from '../../../data/protocols/db/FIndAllMusicRepository';

export class MusicRepository implements CreateMusicRepository, FindAllMusicRepository {
	async createMusic(music: CreateMusic ): Promise<Music> {
		const createdMusic = await Music.create({
			name: music.name,
			lyrics: music.lyrics,
			youtubeLink: music.youtubeLink,
		});
		return createdMusic;
	}

	async findAllMusic(): Promise<Music[]> {
		const musics = await Music.findAll();
		return musics;
	}
}