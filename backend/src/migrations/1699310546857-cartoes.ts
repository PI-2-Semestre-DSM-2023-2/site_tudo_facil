import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class cartoes1699310546857 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "cartoes",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true,
                        generationStrategy: "uuid",
                    },
                    {
                        name: "numero_cartao",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "nome_cartao",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "vencimento_cartao",
                        type: "datetime",
                        isNullable: false,
                    },
                    {
                        name: "codigo_verificacao",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "usuario_id",
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
                        name: "fk_usuario_cartao",
                        columnNames: ["usuario_id"],
                        referencedColumnNames: ["id"],
                        referencedTableName: "usuarios",
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("cartoes");
    }
}
