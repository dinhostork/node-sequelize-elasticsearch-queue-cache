import IORedis from 'ioredis';


export const redisQueue = new IORedis({
	host: process.env.REDIS_QUEUE_HOST,
	port: Number(process.env.REDIS_QUEUE_PORT),
	password: process.env.REDIS_QUEUE_PASS || undefined,
	maxRetriesPerRequest: null
});