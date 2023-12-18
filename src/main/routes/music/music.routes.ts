import { Router } from 'express';
import { adaptRoute } from '../../adapters/express/express.adapter';
import { createMusicControllerFactory } from '../../factories/music/createMusicControllerFactory';
import { listAllMusicsControllerFactory } from '../../factories/music/listAllMusicsControllerFactory';

export default (router: Router): void => {
	const musicRouter = Router();
	musicRouter.post('/', adaptRoute(createMusicControllerFactory()));
	musicRouter.get('/', adaptRoute(listAllMusicsControllerFactory()));
	router.use('/musics', musicRouter);
};
