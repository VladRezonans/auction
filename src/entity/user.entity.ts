import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    public id: string;

    @Column()
    public email: string;

    @Column()
    public phone: number;

    @Column()
    public firstName: string;

    @Column()
    public lastName: string;

    @Column()
    public birthDay: Date;
}
