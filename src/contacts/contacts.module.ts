import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from 'src/entities/address.entity';
import { Contact } from 'src/entities/contact.entity';

@Module({
    imports:[TypeOrmModule.forFeature([Contact,Address])],
    controllers: [],
    providers: [],
})
export class ContactsModule {}
