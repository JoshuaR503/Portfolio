


import { Router} from 'express';
import { renderHomeScreen, renderAboutScreen } from '../controllers/home/home.controller';

const homeRouter: Router = Router();

homeRouter.get('/', renderHomeScreen);
homeRouter.get('/about', renderAboutScreen);

export default homeRouter;

