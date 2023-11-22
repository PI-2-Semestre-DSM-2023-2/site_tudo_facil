import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class planosServicos1699311052397 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "planos_servicos",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true,
                        generationStrategy: "uuid",
                    },
                    {
                        name: "plano_id",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "servico_id",
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
                foreignKeys: [
                    {
                        name: "fk_plano",
                        columnNames: ["plano_id"],
                        referencedColumnNames: ["id"],
                        referencedTableName: "planos",
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE",
                    },
                    {
                        name: "fk_servico",
                        columnNames: ["servico_id"],
                        referencedColumnNames: ["id"],
                        referencedTableName: "servicos",
                        onDelete: "RESTRICT",
                        onUpdate: "CASCADE",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("planos_servicos");
    }
}
