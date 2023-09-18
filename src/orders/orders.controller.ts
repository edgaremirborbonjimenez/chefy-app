import { Controller, Get } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {

    constructor(private orderServcie: OrdersService){
    }

    @Get()
    getOrders(){
        return this.orderServcie.getOrders();
    }

}
