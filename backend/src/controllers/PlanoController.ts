import { Request, Response } from "express";
import AppDataSource from "../data_source";
import Plano from "../models/Plano";
import NivelPlano from "../models/NivelPlano";

/**
 * Verificar se create e update funcionam
 * */

export default class PlanoController {
    public async create(
        request: Request,
        response: Response
    ): Promise<Response> {
        const { nome, descricao, niveisPlanos, servicos } = request.body;

        try {
            const planoRepository = AppDataSource.getRepository(Plano);

            const plano = planoRepository.create({
                nome,
                descricao,
                niveisPlanos,
                servicos,
            });

            await planoRepository.save(plano);

            return response.status(200).json(plano);
        } catch (err) {
            console.log(err);
            return response.status(500).json(err);
        }
    }

    public async findAll(
        request: Request,
        response: Response
    ): Promise<Response> {
        try {
            const planoRepository = AppDataSource.getRepository(Plano);

            const planos = await planoRepository.find({
                relations: ["servicos", "niveisPlanos"],
            });

            return response.status(200).json(planos);
        } catch (err) {
            console.log(err);
            return response.status(500).json(err);
        }
    }

    public async findAllNiveis(
        request: Request,
        response: Response
    ): Promise<Response> {
        try {
            const nivelPlanoRepository = AppDataSource.getRepository(NivelPlano);

            const niveis = await nivelPlanoRepository.find({
                relations: ["plano"],
                order: {
                    plano_id: "ASC",
                    valor: "ASC"
                },
            });

            return response.status(200).json(niveis);
        } catch (err) {
            console.log(err);
            return response.status(500).json(err);
        }
    }

    public async findOne(
        request: Request,
        response: Response
    ): Promise<Response> {
        const { id } = request.params;

        try {
            const planoRepository = AppDataSource.getRepository(Plano);

            const plano = await planoRepository.findOne({
                where: { id },
                relations: ["servicos"],
            });

            return response.status(200).json(plano);
        } catch (err) {
            console.log(err);
            return response.status(500).json(err);
        }
    }

    public async update(
        request: Request,
        response: Response
    ): Promise<Response> {
        const { id, nome, descricao, niveisPlanos, servicos } = request.body;

        try {
            const planoRepository = AppDataSource.getRepository(Plano);

            const plano = await planoRepository.save<Plano>({
                id,
                nome,
                descricao,
                niveisPlanos,
                servicos,
            });

            return response.status(200).json(plano);
        } catch (err) {
            console.log(err);
            return response.status(500).json(err);
        }
    }

    public async delete(
        request: Request,
        response: Response
    ): Promise<Response> {
        const { id } = request.params;

        try {
            const planoRepository = AppDataSource.getRepository(Plano);

            const plano = await planoRepository.delete(id);

            return response.status(200).json(plano);
        } catch (err) {
            console.log(err);
            return response.status(500).json(err);
        }
    }
}
