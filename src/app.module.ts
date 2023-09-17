import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'eebj031002',
      database: 'chefy',
      entities:[ __dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
