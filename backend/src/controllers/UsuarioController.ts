import { Request, Response } from "express";
import { sign } from "jsonwebtoken";
import AppDataSource from "../data_source";
import Usuario from "../models/Usuario";

export default class UsuarioController {
    public async create(
        request: Request,
        response: Response
    ): Promise<Response> {
        const { nome, email, senha, tipo, cartao_credito } = request.body;

        try {
            const usuarioRepository = AppDataSource.getRepository(Usuario);

            const existEmail = await usuarioRepository.findOneBy({ email });

            if (existEmail) {
                return response
                    .status(400)
                    .json({ message: "E-mail já existe" });
            }

            const usuario = usuarioRepository.create({
                nome,
                email,
                senha,
                tipo,
                cartao_credito,
            });

            await usuarioRepository.save(usuario);

            return response.status(200).json(usuario);
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
            const usuarioRepository = AppDataSource.getRepository(Usuario);

            const usuarios = await usuarioRepository.find();

            return response.status(200).json(usuarios);
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
            const usuarioRepository = AppDataSource.getRepository(Usuario);

            const usuario = await usuarioRepository.findOneBy({ id });

            return response.status(200).json(usuario);
        } catch (err) {
            console.log(err);
            return response.status(500).json(err);
        }
    }

    public async login(
        request: Request,
        response: Response
    ): Promise<Response> {
        const { email, senha } = request.body;

        try {
            const usuarioRepository = AppDataSource.getRepository(Usuario);

            const usuario = await usuarioRepository.findOneBy({ email, senha });

            if (usuario) {
                const token = sign({}, "batata", {
                    subject: usuario.id,
                    expiresIn: "3d",
                });

                return response.status(200).json({ usuario, token });
            }

            return response
                .status(401)
                .json({ message: "E-mail ou senha incorretos" });
        } catch (err) {
            console.log(err);
            return response.status(500).json(err);
        }
    }

    public async update(
        request: Request,
        response: Response
    ): Promise<Response> {
        const { id, nome, email, senha, tipo, cartao_credito } = request.body;

        try {
            const usuarioRepository = AppDataSource.getRepository(Usuario);

            const checkUserExist = await usuarioRepository.findOneBy({ id });

            if (!checkUserExist) {
                return response
                    .status(404)
                    .json({ message: "Usuário não encontrado" });
            }

            const usuario = await usuarioRepository.save<Usuario>({
                id,
                nome,
                email,
                senha: senha ? senha : checkUserExist.senha,
                tipo,
                cartao_credito,
            });

            return response.status(200).json(usuario);
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
            const usuarioRepository = AppDataSource.getRepository(Usuario);

            const usuario = await usuarioRepository.delete(id);

            return response.status(200).json(usuario);
        } catch (err) {
            console.log(err);
            return response.status(500).json(err);
        }
    }
}
