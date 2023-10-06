import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindAllOrdersQueryDTO } from 'src/dto/find-all-orders-query.dto';
import { updateOrderDTO } from 'src/dto/update-order';
import { Order } from 'src/entities/order.entity';
import { Repository, UpdateResult } from 'typeorm';

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
            relations: ['dishes','contact']
        })
    }
    
    async updateOrder(id: string, updateOrder: updateOrderDTO): Promise<UpdateResult>{
       return this.orderRespository.update(id, updateOrder);
    }
}
