import { Request, Response } from "express";
import AppDataSource from "../data_source";
import Assinatura from "../models/Assinatura";

export default class AssinaturaController {
	public async create(
		request: Request,
		response: Response
	): Promise<Response> {
		const {
			data_inicio,
			data_fim,
			forma_pagamento,
			usuario_id,
			nivel_plano_id,
			cartao_credito_id,
		} = request.body;

		try {
			const assinaturaRepository =
				AppDataSource.getRepository(Assinatura);

			const assinatura = assinaturaRepository.create({
				data_inicio,
				data_fim,
				forma_pagamento,
				usuario_id,
				nivel_plano_id,
				cartao_credito_id,
			});

			await assinaturaRepository.save(assinatura);

			return response.status(200).json(assinatura);
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
			const assinaturaRepository =
				AppDataSource.getRepository(Assinatura);

			const assinaturas = await assinaturaRepository.find({
				relations: ["usuario", "nivel_plano", "cartao_credito"],
			});

			return response.status(200).json(assinaturas);
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
			const assinaturaRepository =
				AppDataSource.getRepository(Assinatura);

			const assinatura = await assinaturaRepository.findOne({
				where: { id },
				relations: ["usuario", "nivel_plano", "cartao_credito"],
			});

			return response.status(200).json(assinatura);
		} catch (err) {
			console.log(err);
			return response.status(500).json(err);
		}
	}

	public async findByIdUsuario(
		request: Request,
		response: Response
	): Promise<Response> {
		const { id } = request.params;

		try {
			const assinaturaRepository =
				AppDataSource.getRepository(Assinatura);

			const assinatura = await assinaturaRepository.find({
				where: { usuario_id: id },
				relations: {
					usuario: true,
					nivel_plano: { plano: true },
					cartao_credito: true,
				},
				order: { data_inicio: "ASC" },
			});

			return response.status(200).json(assinatura);
		} catch (err) {
			console.log(err);
			return response.status(500).json(err);
		}
	}

	public async update(
		request: Request,
		response: Response
	): Promise<Response> {
		const {
			id,
			data_inicio,
			data_fim,
			ativa,
			forma_pagamento,
			usuario_id,
			nivel_plano_id,
			cartao_credito_id,
		} = request.body;

		try {
			const assinaturaRepository =
				AppDataSource.getRepository(Assinatura);

			const assinatura = await assinaturaRepository.save<Assinatura>({
				id,
				data_inicio,
				data_fim,
				ativa,
				forma_pagamento,
				usuario_id,
				nivel_plano_id,
				cartao_credito_id,
			});

			return response.status(200).json(assinatura);
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
			const assinaturaRepository =
				AppDataSource.getRepository(Assinatura);

			const assinatura = await assinaturaRepository.delete(id);

			return response.status(200).json(assinatura);
		} catch (err) {
			console.log(err);
			return response.status(500).json(err);
		}
	}
}
