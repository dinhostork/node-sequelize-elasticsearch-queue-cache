import { Queue } from 'bullmq';
import { JobProtocol, QueueAdapterProtocol } from '../../../shared/queues/protocols/queues.protocol';

export class BullmqAdapter implements QueueAdapterProtocol {
	constructor(private readonly queue: Queue) {}
    
	async addJob(key: string, data: unknown): Promise<JobProtocol> {
		const job = await this.queue.add(key, data);
		return {
			id: job.id,
			data: job.data,
			key: job.name,
		};
	}
}