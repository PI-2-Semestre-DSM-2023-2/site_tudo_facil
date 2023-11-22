import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class servicos1699309164153 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "servicos",
				columns: [
					{
						name: "id",
						type: "varchar",
						isPrimary: true,
						generationStrategy: "uuid",
					},
					{
						name: "nome",
						type: "varchar",
						isNullable: false,
					},
					{
						name: "descricao",
						type: "varchar",
						isNullable: true,
					},
					{
						name: "descricao_extendida",
						type: "varchar",
						isNullable: true,
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

		await queryRunner.query(`INSERT INTO servicos (id, nome, descricao, descricao_extendida) 
                                 VALUES ('a21d61f5-4d14-4c26-8b5f-c2c4aae7e556', 'Serviços domésticos', 'Soluções para o seu lar', 'Nós oferecemos uma variedade de serviços domésticos para atender às suas necessidades'),
                                 ('90236f1a-9fbf-4244-b21e-f3d76efcbf10', 'Serviços de manutenção', 'Serviços de manutenção com confiança', 'Nós temos a experiência e a qualidade que você precisa'),
                                 ('cd478534-7ec7-4713-9ba2-780d6e44e45e', 'Serviços de assistência pessoal', 'Você no controle da sua vida', 'Nós cuidamos das suas tarefas para que você possa se dedicar ao que realmente importa'),
                                 ('47f1a36d-9007-4a9c-b8e2-a22f78cbbd10', 'Serviços de apoio profissional', 'Apoio profissional que facilita o seu trabalho', 'Nós cuidamos dos detalhes para que você possa focar no essencial'),
                                 ('7fb325ae-3357-4d04-9a9e-0a40b8a40118', 'Serviços de lazer e bem-estar', 'Lazer e bem-estar que fazem a diferença', 'Nós proporcionamos momentos de alegria, paz e harmonia para o seu dia a dia');`);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable("servicos");
	}
}
