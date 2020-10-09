import { Router } from 'express';
import productsRouter from './products.routes';
import sessionsRouter from './session.routes';

const routes = Router();

routes.use("/products", productsRouter);
routes.use("/sessions", sessionsRouter);

export default routes;