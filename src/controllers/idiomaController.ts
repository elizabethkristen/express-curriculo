import { Request, Response } from 'express';
import * as idiomaQueries from '../queries/idiomaQueries';

export const criarIdioma = async (req: Request, res: Response) => {
    try {
        const { candidato_id } = req.params;
        const novoIdioma = await idiomaQueries.criarIdioma({
            ...req.body,
            candidato_id: parseInt(candidato_id),
        });
        res.status(201).json(novoIdioma);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar idioma' });
    }
};

export const obterIdiomas = async (req: Request, res: Response) => {
    try {
        const { candidato_id } = req.params;
        const idiomas = await idiomaQueries.obterIdiomas(parseInt(candidato_id));
        res.status(200).json(idiomas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao obter idiomas' });
    }
};

export const atualizarIdioma = async (req: Request, res: Response) => {
    try {
        const { candidato_id, idioma_id } = req.params;
        const idiomaAtualizado = await idiomaQueries.atualizarIdioma(parseInt(candidato_id), parseInt(idioma_id), req.body);
        if (idiomaAtualizado) {
            res.status(200).json(idiomaAtualizado);
        } else {
            res.status(404).json({ error: 'Idioma não encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar idioma' });
    }
};

export const excluirIdioma = async (req: Request, res: Response) => {
    try {
        const { candidato_id, idioma_id } = req.params;
        const resultado = await idiomaQueries.excluirIdioma(parseInt(candidato_id), parseInt(idioma_id));
        if (resultado) {
            res.status(200).json({ mensagem: 'Idioma excluído com sucesso' });
        } else {
            res.status(404).json({ error: 'Idioma não encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao excluir idioma' });
    }
};
