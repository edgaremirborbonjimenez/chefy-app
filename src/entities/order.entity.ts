import { Column, Entity } from "typeorm";
import AbstractEntity from "./abstract.entity";

@Entity({ name: "orders" })
export class Order extends AbstractEntity {
    @Column({ nullable: false, type: "varchar", length: 20 })
    status: string;
}