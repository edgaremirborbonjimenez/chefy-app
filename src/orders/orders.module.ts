import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from '../entities/order.entity';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { Contact } from 'src/entities/contact.entity';
import { Dish } from 'src/entities/dish.entity';

@Module({
    imports:[TypeOrmModule.forFeature([Order,Contact,Dish])],
    controllers: [OrdersController],
    providers: [OrdersService],
})
export class OrdersModule {}
