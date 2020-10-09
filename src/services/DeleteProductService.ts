import { getCustomRepository } from 'typeorm';
import ProductRepository from '../repositories/ProductRepository';

class DeleteProductService {

    public async execute(id: string): Promise<void> {
        const productRepository = getCustomRepository(ProductRepository);
        
        if(id == null){
            throw Error('id is null');
        }

        const product = await productRepository.findOne(id);

        if(!product){
            throw Error('Product not found');
        }

        await productRepository.delete(id);
    }

}

export default DeleteProductService;