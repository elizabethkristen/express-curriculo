import { Request, Response } from 'express';
import * as habilidadeQueries from '../queries/habilidadeQueries';

export const criarHabilidade = async (req: Request, res: Response) => {
    try {
        const { candidato_id } = req.params;
        const novaHabilidade = await habilidadeQueries.criarHabilidade({
            ...req.body,
            candidato_id: parseInt(candidato_id),
        });
        res.status(201).json(novaHabilidade);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar habilidade' });
    }
};

export const obterHabilidades = async (req: Request, res: Response) => {
    try {
        const { candidato_id } = req.params;
        const habilidades = await habilidadeQueries.obterHabilidades(parseInt(candidato_id));
        res.status(200).json(habilidades);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao obter habilidades' });
    }
};

export const atualizarHabilidade = async (req: Request, res: Response) => {
    try {
        const { candidato_id, habilidade_id } = req.params;
        const habilidadeAtualizada = await habilidadeQueries.atualizarHabilidade(parseInt(candidato_id), parseInt(habilidade_id), req.body);
        if (habilidadeAtualizada) {
            res.status(200).json(habilidadeAtualizada);
        } else {
            res.status(404).json({ error: 'Habilidade não encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar habilidade' });
    }
};

export const excluirHabilidade = async (req: Request, res: Response) => {
    try {
        const { candidato_id, habilidade_id } = req.params;
        const resultado = await habilidadeQueries.excluirHabilidade(parseInt(candidato_id), parseInt(habilidade_id));
        if (resultado) {
            res.status(200).json({ mensagem: 'Habilidade excluída com sucesso' });
        } else {
            res.status(404).json({ error: 'Habilidade não encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao excluir habilidade' });
    }
};
