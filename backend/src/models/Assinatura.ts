import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";
import Usuario from "./Usuario";
import CartaoCredito from "./CartaoCredito";
import NivelPlano from "./NivelPlano";

@Entity("assinaturas")
class Assinatura {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    data_inicio: Date;

    @Column()
    data_fim: Date;

    @Column()
    ativa?: boolean;

    @Column()
    forma_pagamento: string;

    @Column()
    usuario_id: string;

    @ManyToOne(() => Usuario)
    @JoinColumn({ name: "usuario_id" })
    usuario?: Usuario;

    @Column()
    nivel_plano_id: string;

    @ManyToOne(() => NivelPlano)
    @JoinColumn({ name: "nivel_plano_id" })
    nivel_plano?: NivelPlano;

    @Column()
    cartao_credito_id: string;

    @ManyToOne(() => CartaoCredito)
    @JoinColumn({ name: "cartao_credito_id" })
    cartao_credito?: CartaoCredito;

    @CreateDateColumn()
    created_at?: Date;

    @UpdateDateColumn()
    updated_at?: Date;
}

export default Assinatura;
