import { Router } from "express";
const routes = Router();
//controller
import UserController from './controllers/UserController';

routes.get('/users', UserController.index);
routes.get('/post', UserController.create);

export default routes;

