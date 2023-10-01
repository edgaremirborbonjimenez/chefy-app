import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmOptions } from './configs/typeorm.config';
import { ContactsModule } from './contacts/contacts.module';
import { DishesModule } from './dishes/dishes.module';
import { IngredientsModule } from './ingredients/ingredients.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(TypeOrmOptions),
    OrdersModule,
    ContactsModule,
    DishesModule,
    IngredientsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
