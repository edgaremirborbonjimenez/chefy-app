import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from 'src/entities/order.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrdersService {

    constructor(@InjectRepository(Order) private orderRespository:Repository<Order>){}


    async getOrder(){
        return await this.orderRespository.find();
    }

}
