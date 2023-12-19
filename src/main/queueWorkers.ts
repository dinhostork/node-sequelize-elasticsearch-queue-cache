import { readdirSync } from 'fs';
import dotenv from 'dotenv';
dotenv.config();

const files = readdirSync(`${__dirname}/workers`);
const loadWorkers = async () => {
	for (const file of files){
		const worker = (await import(`./workers/${file}`)).default;
		worker.run();
	}
};

(async () => {
	await loadWorkers();
	console.log('Workers running');
})();
