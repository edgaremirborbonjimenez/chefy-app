import { Column, Entity, ManyToOne } from "typeorm";
import AbstractEntity from "./abstract.entity";
import { Dish } from "./dish.entity";

@Entity({ name: "extras" })
export class Extra extends AbstractEntity {
    @Column({ nullable: false, type: "varchar", length: 30 })
    name: string;

    @Column({ nullable: false, type: "float" })
    price: number;
    
    @ManyToOne(() => Dish, (dish) => dish.extras)
    dish: Dish;
}