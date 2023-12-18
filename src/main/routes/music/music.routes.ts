import { Router } from 'express';
import { adaptRoute } from '../../adapters/express/express.adapter';
import { createMusicControllerFactory } from '../../factories/music/createMusicControllerFactory';

export default (router: Router): void => {
	const accountRouter = Router();
	accountRouter.post('/', adaptRoute(createMusicControllerFactory()));

	router.use('/musics', accountRouter);
};
