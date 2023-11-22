import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class planos1699309535238 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "planos",
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

        await queryRunner.query(`INSERT INTO planos (id, nome, descricao) 
                                 VALUES ('7a27f954-a459-4a2e-9235-95010425676a', 'Pacote de serviços domésticos', 'Inclui limpeza, organização, lavanderia, passadoria, cozinha e jardinagem'),
                                 ('b12ed262-ff95-42e0-a6fc-d21237725989', 'Pacote de serviços de manutenção', 'Inclui reparos, instalações, pintura, elétrica, hidráulica, marcenaria e serralheria'),
                                 ('db715670-e5c4-4c90-ad68-2e1f3d4b1f2d', 'Pacote de serviços de assistência pessoal', 'Inclui compras, recados, entregas, reservas, agendamentos e pagamentos'),
                                 ('a2caa6e1-b864-4cbc-b30f-48aec96e42dd', 'Pacote de serviços de apoio profissional', 'Inclui secretariado, contabilidade, administração, marketing, informática e tradução'),
                                 ('7e04fc0c-bfd8-450f-86f2-3a4a41b638cc', 'Pacote de serviços lazer e bem-estar', 'Inclui recreação, animação, música, fotografia, massagem e beleza'),
                                 ('b885acdb-1609-43e8-aa25-606e8d6e0b32', 'Pacote de serviços para idosos', 'Inclui serviços de limpeza, organização, lavanderia, cozinha, compras, recados, entregas e agendamentos'),
                                 ('c7f443c1-2d21-4683-897e-8ba98801c441', 'Pacote de serviços para famílias', 'Inclui serviços de limpeza, organização, lavanderia, passadoria, cozinha, jardinagem, reparos e instalações'),
                                 ('ab44df7b-c46e-4cf6-bb73-aa54cb7380ee', 'Pacote de serviços para empresas', 'Inclui serviços de limpeza, organização, entregas, reservas, agendamentos, pagamentos, contabilidade e administração');`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("planos");
    }
}
