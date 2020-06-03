import { Entity, Index, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Order {
    @PrimaryGeneratedColumn()
    public id: string;

    @Index()
    @Column()
    public userId: string;

    @Index()
    @Column()
    public lotId: string;

    @Column()
    public arrivalLocation: string;

    @Column({ default: 0 })
    public arrivalType: number;

    @Column({ default: 0 })
    public status: number;
}

export default Order;
