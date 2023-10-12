import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindAllOrdersQueryDTO } from 'src/dto/find-all-orders-query.dto';
import { updateOrderDTO } from 'src/dto/update-order';
import { Order } from 'src/entities/order.entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class OrdersService {

    constructor(@InjectRepository(Order) private orderRespository: Repository<Order>) { }


    async getOrders(query: FindAllOrdersQueryDTO): Promise<Order[]> {
        return await this.orderRespository.find({

            where: {
                status: query.status
            },
            skip: query.skip,
            take: query.count,
            relations: ['dishes', 'contact']
        })
    }

    async getOrderById(id: string): Promise<Order> {

        return await this.orderRespository.findOne({
            where: {
                id: id
            },
            relations: ['contact', 'contact.address','dishes', 'dishes.extras', 'dishes.options.ingredients']
        })

    }

    async updateOrder(id: string, updateOrder: updateOrderDTO): Promise<Order | undefined> {
        try {

            const orderUpdated = await this.orderRespository.update(id, updateOrder);

            if (orderUpdated.affected && orderUpdated.affected > 0) {
                const updatedOrder = await this.orderRespository.findOne({
                    where: {
                        id: id
                    },
                    relations:['contact', 'contact.address','dishes', 'dishes.extras', 'dishes.options.ingredients']
                });
                return updatedOrder;
            }

        } catch (error) {
            return undefined;
        }
    }
}
