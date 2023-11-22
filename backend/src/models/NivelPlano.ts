import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";
import TipoPlano from "./TipoPlano";
import Plano from "./Plano";

@Entity("niveis_planos")
class NivelPlano {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    valor: number;

    @Column()
    plano_id: string;

    @ManyToOne(() => Plano, (plano) => plano.niveisPlanos, {
        orphanedRowAction: "delete",
    })
    @JoinColumn({ name: "plano_id" })
    plano?: Plano;

    @Column()
    tipo_plano_id: string;

    @ManyToOne(() => TipoPlano, { eager: true })
    @JoinColumn({ name: "tipo_plano_id" })
    tipo_plano?: TipoPlano;

    @CreateDateColumn()
    created_at?: Date;

    @UpdateDateColumn()
    updated_at?: Date;
}

export default NivelPlano;
