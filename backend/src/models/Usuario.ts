import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
} from "typeorm";
import CartaoCredito from "./CartaoCredito";

@Entity("usuarios")
class Usuario {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    nome: string;

    @Column()
    email: string;

    @Column()
    senha: string;

    @Column()
    tipo: string;

    @OneToMany(() => CartaoCredito, (cartao) => cartao.usuario, {
        cascade: true,
    })
    cartao_credito: CartaoCredito[];

    @CreateDateColumn()
    created_at?: Date;

    @UpdateDateColumn()
    updated_at?: Date;
}

export default Usuario;
