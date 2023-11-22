import express from "express";
import cors from "cors";
import routes from "./routes";

// Porta do servidor
const port = process.env.PORT || 3000;

// Host do servidor
const hostname = process.env.HOSTNAME || "http://localhost";

// App Express
const app = express();

// JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cors
app.use(
    cors({
        origin: ["http://localhost:4200", "https://tudofacildsm.netlify.app"],
    })
);

// Rotas
app.use("/", routes);

// Resposta padrão para quaisquer outras requisições:
app.use((req, res) => {
    res.status(404).send({message: 'Rota não encontrada'});
});


// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando com sucesso ${hostname}:${port}`);
});
