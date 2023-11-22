import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity("tipos_planos")
class TipoPlano {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    descricao: string;

    @CreateDateColumn()
    created_at?: Date;

    @UpdateDateColumn()
    updated_at?: Date;
}

export default TipoPlano;
