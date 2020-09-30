import { Entity, Index, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Lot {
    @PrimaryGeneratedColumn()
    public id: number;

    @Index()
    @Column()
    public userId: string;

    @Column()
    public title: string;

    @Column()
    public image: string;

    @Column()
    public description: string;

    @Column({ default: 0 })
    public status: number;

    @Column()
    public createdAt: Date;

    @Column({ default: 0 })
    public currentPrice: number;

    @Column({ default: 0 })
    public estimatedPrice: number;

    @Column()
    public startAt: Date;

    @Column()
    public endAt: Date;
}
