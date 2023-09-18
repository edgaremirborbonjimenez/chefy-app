import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const TypeOrmOptions: TypeOrmModuleOptions = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1234",
    database: "chefy",
    logging: false,
    synchronize: true,
    autoLoadEntities: true
}