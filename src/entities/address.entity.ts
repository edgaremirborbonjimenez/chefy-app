import { Column, Entity } from "typeorm";
import AbstractEntity from "./abstract.entity";

@Entity({ name: "addresses" })
export class Address extends AbstractEntity {
    @Column({ nullable: false, type: "varchar", length: 200 })
    streetAddress: string;

    @Column({ nullable: false, type: "varchar", length: 5 })
    zipCode: string;
}