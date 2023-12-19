import elasticsearch from 'elasticsearch';

export const client = new elasticsearch.Client({
	host: `${process.env.ELASTICSEARCH_HOST}:${process.env.ELASTICSEARCH_PORT}`,
	log: 'trace',
});