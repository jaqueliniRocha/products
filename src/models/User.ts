import {Entity, ObjectIdColumn, Column} from "typeorm";
import Profile from "./Profile";

@Entity('users')
class User {

    @ObjectIdColumn()
    id: string; 

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    profileId: string;
}

export default User;