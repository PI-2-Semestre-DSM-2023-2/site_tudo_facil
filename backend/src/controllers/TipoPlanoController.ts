import { Request, Response } from "express";
import AppDataSource from "../data_source";
import TipoPlano from "../models/TipoPlano";

export default class TipoPlanoController {
	public async create(
		request: Request,
		response: Response
	): Promise<Response> {
		const { descricao } = request.body;

		try {
			const tipoPlanoRepository = AppDataSource.getRepository(TipoPlano);

			const tipoPlano = tipoPlanoRepository.create({
				descricao,
			});

			await tipoPlanoRepository.save(tipoPlano);

			return response.status(200).json(tipoPlano);
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
			const tipoPlanoRepository = AppDataSource.getRepository(TipoPlano);

			const tiposPlanos = await tipoPlanoRepository.find();

			return response.status(200).json(tiposPlanos);
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
			const tipoPlanoRepository = AppDataSource.getRepository(TipoPlano);

			const tipoPlano = await tipoPlanoRepository.findOneBy({ id });

			return response.status(200).json(tipoPlano);
		} catch (err) {
			console.log(err);
			return response.status(500).json(err);
		}
	}

	public async update(
		request: Request,
		response: Response
	): Promise<Response> {
		const { id, descricao } = request.body;

		try {
			const tipoPlanoRepository = AppDataSource.getRepository(TipoPlano);

			const tipoPlano = await tipoPlanoRepository.save<TipoPlano>({
				id,
				descricao,
			});

			return response.status(200).json(tipoPlano);
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
			const tipoPlanoRepository = AppDataSource.getRepository(TipoPlano);

			const tipoPlano = await tipoPlanoRepository.delete(id);

			return response.status(200).json(tipoPlano);
		} catch (err) {
			console.log(err);
			return response.status(500).json(err);
		}
	}
}
