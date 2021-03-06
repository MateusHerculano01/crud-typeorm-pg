import { Router } from 'express';
import { CreateCategoryController } from './controllers/CreateCategoryController';
import { GetAllCategoriesController } from './controllers/GetAllCategoriesController';
import { DeleteCategoryController } from './controllers/DeleteCategoryController';
import { UpdateCategoryController } from './controllers/UpdateCategoryController';
import { CreateVideoController } from './controllers/CreateVideoController';
import { GetAllVideosController } from './controllers/GetAllVideosController';
import { UpdateVideoController } from './controllers/UpdateVideoController';
import { DeleteVideoController } from './controllers/DeleteVideoController';

const routes = Router();

routes.post('/categories', new CreateCategoryController().handle);
routes.get('/categories', new GetAllCategoriesController().handle);
routes.delete('/categories/:id', new DeleteCategoryController().handle);
routes.put('/categories/:id', new UpdateCategoryController().handle);

routes.post('/videos', new CreateVideoController().handle);
routes.get('/videos', new GetAllVideosController().handle);
routes.put('/videos/:id', new UpdateVideoController().handle);
routes.delete('/videos/:id', new DeleteVideoController().handle);

export { routes };