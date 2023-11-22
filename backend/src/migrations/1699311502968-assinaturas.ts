import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class assinaturas1699311502968 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "assinaturas",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true,
                        generationStrategy: "uuid",
                    },
                    {
                        name: "data_inicio",
                        type: "datetime",
                        isNullable: false,
                    },
                    {
                        name: "data_fim",
                        type: "datetime",
                        isNullable: true,
                    },
                    {
                        name: "ativa",
                        type: "bool",
                        isNullable: false,
                        default: "true",
                    },
                    {
                        name: "forma_pagamento",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "usuario_id",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "nivel_plano_id",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "cartao_credito_id",
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
                foreignKeys: [
                    {
                        name: "fk_usuario_assinatura",
                        columnNames: ["usuario_id"],
                        referencedColumnNames: ["id"],
                        referencedTableName: "usuarios",
                        onDelete: "RESTRICT",
                        onUpdate: "CASCADE",
                    },
                    {
                        name: "fk_nivel_plano_assinatura",
                        columnNames: ["nivel_plano_id"],
                        referencedColumnNames: ["id"],
                        referencedTableName: "niveis_planos",
                        onDelete: "RESTRICT",
                        onUpdate: "CASCADE",
                    },
                    {
                        name: "fk_cartao_assinatura",
                        columnNames: ["cartao_credito_id"],
                        referencedColumnNames: ["id"],
                        referencedTableName: "cartoes",
                        onDelete: "SET NULL",
                        onUpdate: "CASCADE",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("assinaturas");
    }
}
