import { User } from '../../entity/user.entity';

export class ShowUser {
    email: string;
    phone: number;
    firstName: string;
    lastName: string;
    birthDay?: Date;

    constructor(user: User) {
        this.email = user.email;
        this.phone = user.phone;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.birthDay = user.birthDay;
    }
}
