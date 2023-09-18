import { BeforeInsert, BeforeUpdate, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export default abstract class AbstractEntity {
    @PrimaryGeneratedColumn("uuid", {
        name: "id"
    })
    id: string

    @CreateDateColumn({ 
        name: "created_at", 
        type: "timestamptz", 
        nullable: false 
    })
    createdAt: Date;

    @UpdateDateColumn({ 
        name: "updated_at", 
        type: "timestamptz", 
        nullable: false 
    })
    updatedAt: Date;

    @BeforeInsert()
    private beforeInsert(): void {
        this.createdAt = new Date();
        this.updatedAt = this.createdAt;
    }

    @BeforeUpdate()
    private beforeUpdate(): void {
        this.updatedAt = new Date();
    }
}