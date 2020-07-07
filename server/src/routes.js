import { Router } from 'express';
import DahboardController from './app/controllers/DashboardController';

const routes = new Router();

routes.get('/', DahboardController.index);

export default routes;
