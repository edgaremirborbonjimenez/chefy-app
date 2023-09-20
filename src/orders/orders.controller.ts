import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Order } from 'src/entities/order.entity';
import { FindAllOrdersQueryDTO } from 'src/dto/find-all-orders-query.dto';
import { CreateOrderDTO } from 'src/dto/order.dto';

@Controller('orders')
export class OrdersController {

    constructor(private orderServcie: OrdersService){
    }

    @Get()
    getOrders(@Query() query: FindAllOrdersQueryDTO):Promise<Order[]>{
        return this.orderServcie.getOrders(query);
    }

    @Post()
    postOrders(@Body() newOrder:CreateOrderDTO): Promise<Order>{
        return this.orderServcie.createOrder(newOrder);
    }

}
