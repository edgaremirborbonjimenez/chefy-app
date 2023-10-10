import { BadRequestException, Body, Controller, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Order } from 'src/entities/order.entity';
import { FindAllOrdersQueryDTO } from 'src/dto/find-all-orders-query.dto';
import { updateOrderDTO } from 'src/dto/update-order';
import { UpdateResult } from 'typeorm';

@Controller('orders')
export class OrdersController {

    constructor(private orderServcie: OrdersService) {
    }

    @Get()
    getOrders(@Query() query: FindAllOrdersQueryDTO): Promise<Order[]> {
        return this.orderServcie.getOrders(query);
    }

    @Get(':id')
    getOneOrder(@Param('id') id: string): Promise<Order>{
        return this.orderServcie.getOrderById(id)
    }

    @Patch(':id')
    async patchOrders(@Param('id') id: string, @Body() updateOrder: updateOrderDTO): Promise<Order> {
        
            const updateResult = await this.orderServcie.updateOrder(id, updateOrder);
            if(updateResult === undefined){
                throw new BadRequestException("Invalid ID");
            }else{
                return updateResult;
            }
    }
}
