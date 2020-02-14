


import { Router} from 'express';
import { renderHomeScreen } from '../controllers/home/home.controller';

const homeRouter: Router = Router();

homeRouter.get('/', renderHomeScreen);

export default homeRouter;

