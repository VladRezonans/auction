import { Entity, Index, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Bid {
    @PrimaryGeneratedColumn()
    public id: string;

    @Index()
    @Column()
    public userId: string;

    @Index()
    @Column()
    public lotId: string;

    @Column()
    public createdAt: Date;

    @Column({ default: 0 })
    public proposedPrice: number;
}
