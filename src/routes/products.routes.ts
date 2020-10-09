import 'reflect-metadata';

import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import CreateProductService from '../services/CreateProductService'
import DeleteProductService from '../services/DeleteProductService'
import UpdateProductService from '../services/UpdateProductService';
import ensureAuthenticated from '../middlewares/ensureAuthenticated'
import ProductRepository from '../repositories/ProductRepository';

const productsRouter = Router();

productsRouter.use(ensureAuthenticated);

productsRouter.post('/', async (request, response) => {
    try {
        const { name } = request.body;

        const createProductService = new CreateProductService();

        const product = await createProductService.execute(name);

        return response.json( product );
    } catch (err) {
        response.status(400).json( { error: err.message } );
    }
})

productsRouter.get('/', async (request, response) => {
    const productRepository = getCustomRepository(ProductRepository);
    const products = await productRepository.find();
    return response.json( products );
})

productsRouter.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const deleteProductService = new DeleteProductService();
        await deleteProductService.execute(id);
        return response.status(204).send();
    } catch (err) {
        response.status(400).json( { error: err.message } );
    }
})

productsRouter.put('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const { name } = request.body;
        const updateProductService = new UpdateProductService();
        await updateProductService.execute(id, name);
        return response.status(204).send();
    } catch (err) {
        response.status(400).json( { error: err.message } );
    }
})

export default productsRouter;