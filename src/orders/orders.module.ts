import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from '../entities/order.entity';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { Contact } from 'src/entities/contact.entity';
import { Dish } from 'src/entities/dish.entity';
import { Address } from 'src/entities/address.entity';
import { Extra } from 'src/entities/extra.entity';
import { Ingredient } from 'src/entities/ingredients.entity';
import { Option } from 'src/entities/option.entity';

@Module({
    imports:[TypeOrmModule.forFeature([Order,Contact,Dish,Address,Extra,Ingredient,Option])],
    controllers: [OrdersController],
    providers: [OrdersService],
})
export class OrdersModule {}
