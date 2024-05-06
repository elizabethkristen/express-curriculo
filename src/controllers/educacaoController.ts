import { Request, Response } from 'express';
import * as educacaoQueries from '../queries/educacaoQueries';

export const criarEducacao = async (req: Request, res: Response) => {
    try {
        const { candidato_id } = req.params;
        const novaEducacao = await educacaoQueries.criarEducacao({
            ...req.body,
            candidato_id: parseInt(candidato_id),
        });
        res.status(201).json(novaEducacao);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar educação' });
    }
};

export const obterEducacoes = async (req: Request, res: Response) => {
    try {
        const { candidato_id } = req.params;
        const educacoes = await educacaoQueries.obterEducacoes(parseInt(candidato_id));
        res.status(200).json(educacoes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao obter educações' });
    }
};

export const atualizarEducacao = async (req: Request, res: Response) => {
    try {
        const { candidato_id, educacao_id } = req.params;
        const educacaoAtualizada = await educacaoQueries.atualizarEducacao(parseInt(candidato_id), parseInt(educacao_id), req.body);
        if (educacaoAtualizada) {
            res.status(200).json(educacaoAtualizada);
        } else {
            res.status(404).json({ error: 'Educação não encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar educação' });
    }
};

export const excluirEducacao = async (req: Request, res: Response) => {
    try {
        const { candidato_id, educacao_id } = req.params;
        const resultado = await educacaoQueries.excluirEducacao(parseInt(candidato_id), parseInt(educacao_id));
        if (resultado) {
            res.status(200).json({ mensagem: 'Educação excluída com sucesso' });
        } else {
            res.status(404).json({ error: 'Educação não encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao excluir educação' });
    }
};
