import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import AbstractEntity from "./abstract.entity";
import { Order } from "./order.entity";
import { Extra } from "./extra.entity";
import { Option } from "./option.entity";

@Entity({ name: "dishes" })
export class Dish extends AbstractEntity {
    @Column({ nullable: false, type: "varchar", length: 30 })
    name: string;

    @Column({ nullable: false, type: "int" })
    quanitty: number;

    @ManyToOne(() => Order, (order) => order.dishes)
    order: Order;

    @OneToMany(() => Extra, (extra) => extra.dish)
    extras: Extra[];

    @OneToMany(() => Option, (option) => option.dish)
    options: Option[];
}