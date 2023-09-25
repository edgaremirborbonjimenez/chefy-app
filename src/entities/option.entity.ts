import { Column, ManyToOne, OneToMany,Entity } from "typeorm";
import AbstractEntity from "./abstract.entity";
import { Dish } from "./dish.entity";
import { OptionType } from "./enums/option-type.enum";
import { Ingredient } from "./ingredients.entity";

@Entity({ name: "options" })
export class Option extends AbstractEntity {
    @Column({ nullable: false, type: "float" })
    price: number;

    @Column({ nullable: false, type: "enum", enum: OptionType, default: OptionType.WITHOUT })
    type: OptionType;

    @ManyToOne(() => Dish, (dish) => dish.options)
    dish: Dish;

    @OneToMany(() => Ingredient, (ingredient) => ingredient.option)
    ingredients: Ingredient[];
}