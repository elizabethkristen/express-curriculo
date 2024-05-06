import { AppDataSource } from '../config/ormconfig';
import Educacao from '../models/educacao';

export const criarEducacao = async (dados: any) => {
    const educacaoRepository = AppDataSource.getRepository(Educacao);

    const novaEducacao = educacaoRepository.create(dados);

    return await educacaoRepository.save(novaEducacao);
};

export const obterEducacoes = async (candidato_id: number) => {
    const educacaoRepository = AppDataSource.getRepository(Educacao);

    return await educacaoRepository.find({
        where: { candidato_id },
    });
};

export const atualizarEducacao = async (candidato_id: number, educacao_id: number, dados: any) => {
    const educacaoRepository = AppDataSource.getRepository(Educacao);

    try {
        const educacao = await educacaoRepository.findOne({
            where: { candidato_id, educacao_id },
        });

        if (educacao) {
            educacaoRepository.merge(educacao, dados);
            return await educacaoRepository.save(educacao);
        }

        return null;
    } catch (error) {
        console.error('Erro ao atualizar educação:', error);
        throw error;
    }
};

export const excluirEducacao = async (candidato_id: number, educacao_id: number) => {
    const educacaoRepository = AppDataSource.getRepository(Educacao);

    const educacao = await educacaoRepository.findOne({
        where: { candidato_id, educacao_id },
    });

    if (educacao) {
        return await educacaoRepository.remove(educacao);
    }

    return null;
};
