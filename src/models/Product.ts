import {Entity, ObjectIdColumn, Column} from "typeorm";

@Entity('products')
class Product {

    @ObjectIdColumn()
    id: string; 

    @Column()
    name: string;

    constructor(name: string, id?: string) {
        this.name = name;
        if(id != null){
            this.id = id;
        }
    }
}

export default Product;