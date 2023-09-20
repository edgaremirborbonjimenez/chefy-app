import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindAllOrdersQueryDTO } from 'src/dto/find-all-orders-query.dto';
import { CreateOrderDTO } from 'src/dto/order.dto';
import { Order } from 'src/entities/order.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrdersService {

    constructor(@InjectRepository(Order) private orderRespository:Repository<Order>){}


    async getOrders(query:FindAllOrdersQueryDTO):Promise<Order[]>{
        return await this.orderRespository.find({

            where: {
                status: query.status
            },
            skip: query.skip,
            take: query.count,
        })
    }

    async createOrder(order:CreateOrderDTO):Promise<Order>{

        const newOrder = this.orderRespository.create(order);
        return this.orderRespository.save(newOrder);

    }

}
