import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class tiposPlanos1699308890825 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "tipos_planos",
				columns: [
					{
						name: "id",
						type: "varchar",
						isPrimary: true,
						generationStrategy: "uuid",
					},
					{
						name: "descricao",
						type: "varchar",
						isNullable: false,
					},
					{
						name: "created_at",
						type: "datetime",
						default: "now()",
					},
					{
						name: "updated_at",
						type: "datetime",
						default: "now()",
					},
				],
			})
		);

		await queryRunner.query(`INSERT INTO tipos_planos (id, descricao) 
                                VALUES ('51fe4112-ef90-4949-b13e-db23fdd2454d', 'Básico'),
                                ('a5e3e3e7-6010-4f84-893c-e752a2c0bcee', 'Intermediário'),
                                ('b12831b5-04d8-4ab7-b375-2dc1a4b56d16', 'Avançado');`);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable("tipos_planos");
	}
}
