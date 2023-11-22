import { Request, Response } from "express";
import AppDataSource from "../data_source";
import CartaoCredito from "../models/CartaoCredito";

export default class CartaoCreditoController {
	public async create(
		request: Request,
		response: Response
	): Promise<Response> {
		const {
			numero_cartao,
			nome_cartao,
			vencimento_cartao,
			codigo_verificacao,
			usuario_id,
		} = request.body;

		try {
			const cartaoCreditoRepository =
				AppDataSource.getRepository(CartaoCredito);

			const cartaoCredito = cartaoCreditoRepository.create({
				numero_cartao,
				nome_cartao,
				vencimento_cartao,
				codigo_verificacao,
				usuario_id,
			});

			await cartaoCreditoRepository.save(cartaoCredito);

			return response.status(200).json(cartaoCredito);
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
			const cartaoCreditoRepository =
				AppDataSource.getRepository(CartaoCredito);

			const cartoesCredito = await cartaoCreditoRepository.find();

			return response.status(200).json(cartoesCredito);
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
			const cartaoCreditoRepository =
				AppDataSource.getRepository(CartaoCredito);

			const cartaoCredito = await cartaoCreditoRepository.findOneBy({
				id,
			});

			return response.status(200).json(cartaoCredito);
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
			numero_cartao,
			nome_cartao,
			vencimento_cartao,
			codigo_verificacao,
			usuario_id,
		} = request.body;

		try {
			const cartaoCreditoRepository =
				AppDataSource.getRepository(CartaoCredito);

			const cartaoCredito = await cartaoCreditoRepository.save<CartaoCredito>({
				id,
				numero_cartao,
				nome_cartao,
				vencimento_cartao,
				codigo_verificacao,
				usuario_id,
			});

			return response.status(200).json(cartaoCredito);
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
			const cartaoCreditoRepository =
				AppDataSource.getRepository(CartaoCredito);

			const cartaoCredito = await cartaoCreditoRepository.delete(id);

			return response.status(200).json(cartaoCredito);
		} catch (err) {
			console.log(err);
			return response.status(500).json(err);
		}
	}
}
