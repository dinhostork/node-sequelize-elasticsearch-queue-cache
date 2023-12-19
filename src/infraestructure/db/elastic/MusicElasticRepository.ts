import { client } from '../../../config/elasticsearch';
import { Music } from '../../../data/local/models/Music';
import { FindAllMusicRepository } from '../../../data/protocols/db/FIndAllMusicRepository';

export class MusicElasticRepository implements FindAllMusicRepository {
	async findAllMusic(): Promise<Music[]> {
		return client.search({
			index: 'music',
			type: 'music',
			size: 10000,
			body: {
				query: {
					match_all: {},
				},
			},
		}) as unknown as Music[];
	}
}