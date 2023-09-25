import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import AbstractEntity from "./abstract.entity";
import { Contact } from "./contact.entity";
import { Dish } from "./dish.entity";

@Entity({ name: "orders" })
export class Order extends AbstractEntity {
    @Column({ nullable: false, type: "varchar", length: 20 })
    status: string;

    @ManyToOne(() => Contact, (contact) => contact.id)
    contact: Contact;

    @OneToMany(() => Dish, (dish) => dish.order)
    dishes: Dish[];
}
