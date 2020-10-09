import {Entity, ObjectID, ObjectIdColumn, Column} from "typeorm";

@Entity('profiles')
class Profile {

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

export default Profile;