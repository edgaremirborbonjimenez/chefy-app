import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ingredient } from 'src/entities/ingredients.entity';
import { Option } from 'src/entities/option.entity';


@Module({
    imports:[TypeOrmModule.forFeature([Option,Ingredient])],
    controllers: [],
    providers: [],
})
export class IngredientsModule {}
