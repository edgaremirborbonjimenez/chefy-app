import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Order } from 'src/entities/order.entity';
import { FindAllOrdersQueryDTO } from 'src/dto/find-all-orders-query.dto';
import { updateOrderDTO } from 'src/dto/order.dto';
import { UpdateResult } from 'typeorm';

@Controller('orders')
export class OrdersController {

    constructor(private orderServcie: OrdersService){
    }

    @Get()
    getOrders(@Query() query: FindAllOrdersQueryDTO):Promise<Order[]>{
        return this.orderServcie.getOrders(query);
    }

    @Patch(':id')
    pathcOrders(@Param('id') id: string, @Body() updateOrder: updateOrderDTO): Promise<UpdateResult>{
        return this.orderServcie.updateOrder(id, updateOrder);
    }

}
