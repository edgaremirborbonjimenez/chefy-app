import { Controller, Get } from '@nestjs/common';

@Controller('orders')
export class OrdersController {

    constructor(){


    }

    @Get()
    getOrders(){

    }

}
