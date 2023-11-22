import 'reflect-metadata';

import { Router } from 'express';

import assinaturaRouter from './routes/Assinatura.routes';
import cartaoCreditoRouter from './routes/CartaoCredito.routes';
import planoRouter from './routes/Plano.routes';
import servicoRouter from './routes/Servico.routes';
import tipoPlanoRouter from './routes/TipoPlano.routes';
import usuarioRouter from './routes/Usuario.routes';

const routes = Router();

routes.use('/assinaturas', assinaturaRouter);
routes.use('/cartoes', cartaoCreditoRouter);
routes.use('/planos', planoRouter);
routes.use('/servicos', servicoRouter);
routes.use('/tipos_planos', tipoPlanoRouter);
routes.use('/usuarios', usuarioRouter);

export default routes;