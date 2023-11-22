import "reflect-metadata";
import { DataSource } from "typeorm";
import Assinatura from "./models/Assinatura";
import CartaoCredito from "./models/CartaoCredito";
import Plano from "./models/Plano";
import Servico from "./models/Servico";
import TipoPlano from "./models/TipoPlano";
import Usuario from "./models/Usuario";
import NivelPlano from "./models/NivelPlano";

const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "tudo_facil",
  entities: [Assinatura, CartaoCredito, NivelPlano, Plano, Servico, TipoPlano, Usuario],
  subscribers: [],
  migrations: ['./src/migrations/*.ts'],
});

AppDataSource.initialize()
    .then(() => {
        console.log('Data Source has been initialized!');
    })
    .catch(err => {
        console.error('Error during Data Source initialization', err);
    });

export default AppDataSource;
