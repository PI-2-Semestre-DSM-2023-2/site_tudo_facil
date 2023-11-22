import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
    ManyToMany,
    JoinTable,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
} from "typeorm";
import TipoPlano from "./TipoPlano";
import Servico from "./Servico";
import NivelPlano from "./NivelPlano";

@Entity("planos")
class Plano {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    nome: string;

    @Column()
    descricao: string;

    @OneToMany(() => NivelPlano, (nivel) => nivel.plano, {
        cascade: true,
    })
    niveisPlanos: NivelPlano[];

    @ManyToMany(() => Servico)
    @JoinTable({
        name: "planos_servicos",
        joinColumns: [{ name: "plano_id" }],
        inverseJoinColumns: [{ name: "servico_id" }],
    })
    servicos: Servico[];

    @CreateDateColumn()
    created_at?: Date;

    @UpdateDateColumn()
    updated_at?: Date;
}

export default Plano;
