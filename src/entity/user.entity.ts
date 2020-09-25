import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcryptjs';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    public id: string;

    @Column({ unique: true })
    public email: string;

    @Column()
    public password: string;

    @Column()
    public phone: number;

    @Column()
    public firstName: string;

    @Column()
    public lastName: string;

    @Column()
    public birthDay: Date;

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }
}
