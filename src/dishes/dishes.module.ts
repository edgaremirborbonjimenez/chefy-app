import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dish } from 'src/entities/dish.entity';
import { Extra } from 'src/entities/extra.entity';
import { Option } from 'src/entities/option.entity';


@Module({
    imports:[TypeOrmModule.forFeature([Dish,Extra,Option])],
    controllers: [],
    providers: [],
})
export class DishesModule {}
