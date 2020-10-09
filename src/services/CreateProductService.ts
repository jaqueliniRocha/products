import { getCustomRepository } from 'typeorm';

import Product from '../models/Product';
import ProductRepository from '../repositories/ProductRepository';

class CreateProductService {

    public async execute(name: string): Promise<Product> {
        const productRepository = getCustomRepository(ProductRepository);
        
        if(name == null){
            throw Error('name is null');
        }

        const product = productRepository.create({name});

        await productRepository.save(product);

        return product;
    }

}

export default CreateProductService;