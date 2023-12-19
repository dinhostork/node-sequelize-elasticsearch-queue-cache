import { Queue } from 'bullmq';
import { redisQueue } from '../../config/queueDb';

export default {
	name: 'CREATED_MUSIC',
	get bull() {
		return new Queue(this.name, {
			connection: redisQueue,
		});
	},
};