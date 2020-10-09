import { getCustomRepository, UpdateResult } from 'typeorm';
import Product from '../models/Product';
import ProductRepository from '../repositories/ProductRepository';

class UpdateProfileService {

    public async execute(id: string, name: string): Promise<Product> {
        const productRepository = getCustomRepository(ProductRepository);
        
        if(!name){
            throw Error('name is null');
        }

        const product = await productRepository.findOne(id);

        if(product == null){
            throw Error('Product not found');
        }

        product.name = name;

        return await productRepository.save(product);
    }

}

export default UpdateProfileService;