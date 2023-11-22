import { Request, Response } from "express";
import AppDataSource from "../data_source";
import Servico from "../models/Servico";

export default class ServicoController {
	public async create(
		request: Request,
		response: Response
	): Promise<Response> {
		const { nome, descricao, descricao_extendida } = request.body;

		try {
			const servicoRepository = AppDataSource.getRepository(Servico);

			const servico = servicoRepository.create({
				nome,
				descricao,
				descricao_extendida,
			});

			await servicoRepository.save(servico);

			return response.status(200).json(servico);
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
			const servicoRepository = AppDataSource.getRepository(Servico);

			const servicos = await servicoRepository.find();

			return response.status(200).json(servicos);
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
			const servicoRepository = AppDataSource.getRepository(Servico);

			const servicos = await servicoRepository.findOneBy({ id });

			return response.status(200).json(servicos);
		} catch (err) {
			console.log(err);
			return response.status(500).json(err);
		}
	}

	public async update(
		request: Request,
		response: Response
	): Promise<Response> {
		const { id, nome, descricao, descricao_extendida } = request.body;

		try {
			const servicoRepository = AppDataSource.getRepository(Servico);

			const servico = await servicoRepository.save<Servico>({
				id,
				nome,
				descricao,
				descricao_extendida,
			});

			return response.status(200).json(servico);
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
			const servicoRepository = AppDataSource.getRepository(Servico);

			const servico = await servicoRepository.delete(id);

			return response.status(200).json(servico);
		} catch (err) {
			console.log(err);
			return response.status(500).json(err);
		}
	}
}
