import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class niveisPlanos1699311501968 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "niveis_planos",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true,
                        generationStrategy: "uuid",
                    },
                    {
                        name: "valor",
                        type: "numeric",
                        isNullable: true,
                    },
                    {
                        name: "entrega_plano",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "plano_id",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "tipo_plano_id",
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
                        name: "fk_plano_nivel_plano",
                        columnNames: ["plano_id"],
                        referencedColumnNames: ["id"],
                        referencedTableName: "planos",
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE",
                    },
                    {
                        name: "fk_tipo_plano_nivel_plano",
                        columnNames: ["tipo_plano_id"],
                        referencedColumnNames: ["id"],
                        referencedTableName: "tipos_planos",
                        onDelete: "RESTRICT",
                        onUpdate: "CASCADE",
                    },
                ],
            })
        );

        await queryRunner.query(`INSERT INTO niveis_planos (id, valor, entrega_plano, plano_id, tipo_plano_id) VALUES ('dd287070-b9a6-4e71-86ac-180df34f1cb8', 100, '2 horas de serviço por semana\n1 profissional', '7a27f954-a459-4a2e-9235-95010425676a', '51fe4112-ef90-4949-b13e-db23fdd2454d'),
                                 ('6eb28e9e-0cb0-43d5-9fa7-3f91f8b47fae', 180, '4 horas de serviço por semana\n2 profissionais', '7a27f954-a459-4a2e-9235-95010425676a', 'a5e3e3e7-6010-4f84-893c-e752a2c0bcee'),
                                 ('1eaca1df-7011-4e20-b384-a6cf5931938d', 320, '8 horas de serviço por semana\n3 profissionais', '7a27f954-a459-4a2e-9235-95010425676a', 'b12831b5-04d8-4ab7-b375-2dc1a4b56d16'),
                                 ('ae4e5132-430e-4300-9ae5-964ce58bff68', 80, '1 visita por mês\nAté 2 horas de serviço\nMateriais básicos inclusos', 'b12ed262-ff95-42e0-a6fc-d21237725989', '51fe4112-ef90-4949-b13e-db23fdd2454d'),
                                 ('20ca36af-2bf7-409e-b3ff-9a298f81118b', 140, '2 visitas por mês\nAté 4 horas de serviço\nMateriais intermediários inclusos', 'b12ed262-ff95-42e0-a6fc-d21237725989', 'a5e3e3e7-6010-4f84-893c-e752a2c0bcee'),
                                 ('9f0d4462-3f6d-4cee-b055-806e00042283', 240, '4 visitas por mês\nAté 8 horas de serviço\nMateriais avançados inclusos', 'b12ed262-ff95-42e0-a6fc-d21237725989', 'b12831b5-04d8-4ab7-b375-2dc1a4b56d16'),
                                 ('c5080360-0b6e-4dac-b3f7-7143aac95067', 50, 'Até 5 solicitações por mês\nLimite de R$ 500,00 por solicitação\nTaxa de serviço de 10%', 'db715670-e5c4-4c90-ad68-2e1f3d4b1f2d', '51fe4112-ef90-4949-b13e-db23fdd2454d'),
                                 ('7814b537-a6d2-4f0b-af17-bf736f960fea', 80, 'Até 10 solicitações por mês\nLimite de R$ 1.000,00 por solicitação\nTaxa de serviço de 8%', 'db715670-e5c4-4c90-ad68-2e1f3d4b1f2d', 'a5e3e3e7-6010-4f84-893c-e752a2c0bcee'),
                                 ('7efdc5b9-d1c9-4454-afad-712bc01e52e0', 100, 'Até 20 solicitações por mês\nLimite de R$ 2.000,00 por solicitação\nTaxa de serviço de 5%', 'db715670-e5c4-4c90-ad68-2e1f3d4b1f2d', 'b12831b5-04d8-4ab7-b375-2dc1a4b56d16'),
                                 ('5750d274-b43d-4e18-9911-94169c218d4c', 500, '5 horas de serviço por semana\n1 profissional por serviço', 'a2caa6e1-b864-4cbc-b30f-48aec96e42dd', '51fe4112-ef90-4949-b13e-db23fdd2454d'),
                                 ('9733da33-3ac0-43aa-8045-c23c26197d3b', 1000, '10 horas de serviço por semana\n2 profissionais por serviço', 'a2caa6e1-b864-4cbc-b30f-48aec96e42dd', 'a5e3e3e7-6010-4f84-893c-e752a2c0bcee'),
                                 ('3d956420-beff-4dbe-b03d-019564b0e13a', 2000, '20 horas de serviço por semana\n4 profissionais por serviço', 'a2caa6e1-b864-4cbc-b30f-48aec96e42dd', 'b12831b5-04d8-4ab7-b375-2dc1a4b56d16'),
                                 ('77750f01-5511-4a82-97d1-a8e0f0593cd2', 200, '2 horas de serviço por semana\n1 visita mensal a um spa', '7e04fc0c-bfd8-450f-86f2-3a4a41b638cc', '51fe4112-ef90-4949-b13e-db23fdd2454d'),
                                 ('e4a0dfaa-b60a-4cf1-80e4-af8d6891e13e', 350, '4 horas de serviço por semana\n2 visitas mensais a um spa', '7e04fc0c-bfd8-450f-86f2-3a4a41b638cc', 'a5e3e3e7-6010-4f84-893c-e752a2c0bcee'),
                                 ('de52b306-ac99-4c34-9bac-36b3982d998b', 500, '6 horas de serviço por semana\n4 visitas mensais a um spa', '7e04fc0c-bfd8-450f-86f2-3a4a41b638cc', 'b12831b5-04d8-4ab7-b375-2dc1a4b56d16'),
                                 ('9d047b5a-36ad-4852-814d-da3a2682e29f', 120, '2 horas de serviço por semana\n1 profissional', 'b885acdb-1609-43e8-aa25-606e8d6e0b32', '51fe4112-ef90-4949-b13e-db23fdd2454d'),
                                 ('c9b1da82-a892-40f8-b544-4b752b695963', 200, '4 horas de serviço por semana\n2 profissionais', 'b885acdb-1609-43e8-aa25-606e8d6e0b32', 'a5e3e3e7-6010-4f84-893c-e752a2c0bcee'),
                                 ('a4813f9c-7719-4292-9513-5952d0209401', 360, '8 horas de serviço por semana\n3 profissionais', 'b885acdb-1609-43e8-aa25-606e8d6e0b32', 'b12831b5-04d8-4ab7-b375-2dc1a4b56d16'),
                                 ('47f135c7-acb8-47f8-b402-e4a5042ab817', 240, '4 horas de serviço por semana\n2 profissionais', 'c7f443c1-2d21-4683-897e-8ba98801c441', '51fe4112-ef90-4949-b13e-db23fdd2454d'),
                                 ('4e7a26f2-6809-447a-9f3c-89b0887808d5', 400, '8 horas de serviço por semana\n3 profissionais', 'c7f443c1-2d21-4683-897e-8ba98801c441', 'a5e3e3e7-6010-4f84-893c-e752a2c0bcee'),
                                 ('5307bb87-7240-416d-b1cf-e10269f56dd7', 720, '16 horas de serviço por semana\n4 profissionais', 'c7f443c1-2d21-4683-897e-8ba98801c441', 'b12831b5-04d8-4ab7-b375-2dc1a4b56d16'),
                                 ('48feaa94-dbd9-4e1f-bb20-08fd660d6a6e', 800, '10 horas de serviço por semana\n2 profissionais', 'ab44df7b-c46e-4cf6-bb73-aa54cb7380ee', '51fe4112-ef90-4949-b13e-db23fdd2454d'),
                                 ('b1fc5d2f-4a40-47eb-ab32-803d5aa3cec6', 1400, '20 horas de serviço por semana\n4 profissionais', 'ab44df7b-c46e-4cf6-bb73-aa54cb7380ee', 'a5e3e3e7-6010-4f84-893c-e752a2c0bcee'),
                                 ('111bfc1d-0816-4457-b472-792e6a609a24', 2400, '40 horas de serviço por semana\n8 profissionais', 'ab44df7b-c46e-4cf6-bb73-aa54cb7380ee', 'b12831b5-04d8-4ab7-b375-2dc1a4b56d16');`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("niveis_planos");
    }
}
