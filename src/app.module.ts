import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmOptions } from './configs/typeorm.config';


@Module({
  imports: [
    TypeOrmModule.forRoot(TypeOrmOptions),
    OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
