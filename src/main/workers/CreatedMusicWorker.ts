
import { Worker, Job } from 'bullmq';
import CreateMusicQueue from '../../shared/queues/CreateMusicQueue';
import { redisQueue } from '../../config/queueDb';
import { client } from '../../config/elasticsearch';

export default new Worker(
	CreateMusicQueue.name,
	async (job: Job) => {
		return await client.index({
			index: 'music',
			type: 'music',
			body: {
				name: job.data.name,
				lyrics: job.data.lyrics,
				youtubeLink: job.data.youtubeLink,
			},
		});
	},
	{ autorun: false, connection: redisQueue },
);