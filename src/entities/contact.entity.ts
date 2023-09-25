import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import AbstractEntity from "./abstract.entity";
import { Order } from "./order.entity";
import { Address } from "./address.entity";

@Entity({ name: "contacts" })
export class Contact extends AbstractEntity {
    @Column({ nullable: false, type: "varchar", length: 150 })
    name: string;

    @Column({ nullable: false, type: "varchar", length: 10 })
    phoneNumber: string;

    @OneToOne(() => Address)
    @JoinColumn()
    address: Address;

    @OneToMany(() => Order, (order) => order.id)
    orders: Order[];
}