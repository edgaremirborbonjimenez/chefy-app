import { Column, Entity, ManyToOne } from "typeorm";
import AbstractEntity from "./abstract.entity";
import { Option } from "./option.entity";

@Entity({ name: "ingredients" })
export class Ingredient extends AbstractEntity {
    @Column({ nullable: false, type: "varchar", length: 50})
    name: string;

    @ManyToOne(() => Option, (option) => option.ingredients)
    option: Option;
}