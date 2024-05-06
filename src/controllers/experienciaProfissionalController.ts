import { Request, Response } from 'express';
import * as experienciaProfissionalQueries from '../queries/experienciaProfissionalQueries';

export const criarExperiencia = async (req: Request, res: Response) => {
    try {
        const { candidato_id } = req.params;
        const novaExperiencia = await experienciaProfissionalQueries.criarExperiencia({
            ...req.body,
            candidato_id: parseInt(candidato_id),
        });
        res.status(201).json(novaExperiencia);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar experiência profissional' });
    }
};

export const obterExperiencias = async (req: Request, res: Response) => {
    try {
        const { candidato_id } = req.params;
        const experiencias = await experienciaProfissionalQueries.obterExperiencias(parseInt(candidato_id));
        res.status(200).json(experiencias);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao obter experiências profissionais' });
    }
};

export const atualizarExperiencia = async (req: Request, res: Response) => {
    try {
        const { candidato_id, experiencia_id } = req.params;
        const experienciaAtualizada = await experienciaProfissionalQueries.atualizarExperiencia(parseInt(candidato_id), parseInt(experiencia_id), req.body);
        if (experienciaAtualizada) {
            res.status(200).json(experienciaAtualizada);
        } else {
            res.status(404).json({ error: 'Experiência profissional não encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar experiência profissional' });
    }
};

export const excluirExperiencia = async (req: Request, res: Response) => {
    try {
        const { candidato_id, experiencia_id } = req.params;
        const resultado = await experienciaProfissionalQueries.excluirExperiencia(parseInt(candidato_id), parseInt(experiencia_id));
        if (resultado) {
            res.status(200).json({ mensagem: 'Experiência profissional excluída com sucesso' });
        } else {
            res.status(404).json({ error: 'Experiência profissional não encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao excluir experiência profissional' });
    }
};
