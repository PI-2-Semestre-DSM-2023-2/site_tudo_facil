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

@Entity("cartoes")
class CartaoCredito {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	numero_cartao: string;

	@Column()
	nome_cartao: string;

	@Column()
	vencimento_cartao: Date;

	@Column()
	codigo_verificacao: string;

	@Column()
	usuario_id: string;

	@ManyToOne(() => Usuario)
	@JoinColumn({ name: "usuario_id" })
	usuario?: Usuario;

	@CreateDateColumn()
    created_at?: Date;

    @UpdateDateColumn()
    updated_at?: Date;
}

export default CartaoCredito;
