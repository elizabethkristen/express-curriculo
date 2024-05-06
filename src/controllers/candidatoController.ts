import { Request, Response } from 'express';
import * as candidatoQueries from '../queries/candidatoQueries';
import { AppDataSource } from '../config/ormconfig';
import { QueryRunner } from 'typeorm';

export const criarCandidato = async (req: Request, res: Response) => {
    const queryRunner = AppDataSource.createQueryRunner();

    try {
        console.log('Iniciando transação...');
        await queryRunner.startTransaction();

        const novoCandidato = await candidatoQueries.criarCandidato(req.body, queryRunner);

        await queryRunner.commitTransaction();
        console.log('Transação commitada com sucesso.');

        res.status(201).json(novoCandidato);
    } catch (error) {
        console.error('Erro ao criar candidato:', error);
        await queryRunner.rollbackTransaction();
        res.status(500).json({ error: 'Erro ao criar candidato com campos relacionados' });
    } finally {
        await queryRunner.release();
        console.log('QueryRunner liberado.');
    }
};



export const obterCandidatos = async (req: Request, res: Response) => {
    const queryRunner = AppDataSource.createQueryRunner();

    try {
        await queryRunner.startTransaction();
        
        const candidatos = await candidatoQueries.obterCandidatos(queryRunner);
        
        await queryRunner.commitTransaction();
        
        res.status(200).json(candidatos);
    } catch (error) {
        await queryRunner.rollbackTransaction();
        console.error('Erro ao obter candidatos:', error);
        
        res.status(500).json({ error: 'Erro ao obter candidatos com campos relacionados.' });
    } finally {
        await queryRunner.release();
    }
};

export const obterCandidatoPorId = async (req: Request, res: Response) => {
    const { id } = req.params;
    const queryRunner = AppDataSource.createQueryRunner();
    
    try {
        await queryRunner.startTransaction();
        
        const candidato = await candidatoQueries.obterCandidatoPorId(parseInt(id, 10), queryRunner);
        
        if (candidato) {
            await queryRunner.commitTransaction();
            
            res.status(200).json(candidato);
        } else {
            await queryRunner.rollbackTransaction();
            
            res.status(404).json({ error: 'Candidato não encontrado.' });
        }
    } catch (error) {
        await queryRunner.rollbackTransaction();
        
        console.error('Erro ao obter candidato:', error);
        res.status(500).json({ error: 'Erro ao obter candidato.' });
    } finally {
        await queryRunner.release();
    }
};

export const atualizarCandidato = async (req: Request, res: Response) => {
    const { id } = req.params;
    const queryRunner = AppDataSource.createQueryRunner();
    
    try {
        await queryRunner.startTransaction();
        
        const candidatoAtualizado = await candidatoQueries.atualizarCandidato(parseInt(id, 10), req.body, queryRunner);
        
        if (candidatoAtualizado) {
            await queryRunner.commitTransaction();
            
            res.status(200).json(candidatoAtualizado);
        } else {
            await queryRunner.rollbackTransaction();
            
            res.status(404).json({ error: 'Candidato não encontrado.' });
        }
    } catch (error) {
        await queryRunner.rollbackTransaction();
        
        console.error('Erro ao atualizar candidato:', error);
        res.status(500).json({ error: 'Erro ao atualizar candidato.' });
    } finally {
        await queryRunner.release();
    }
};

export const excluirCandidato = async (req: Request, res: Response) => {
    const { id } = req.params;
    const queryRunner = AppDataSource.createQueryRunner();
    
    try {
        await queryRunner.startTransaction();
        
        const resultado = await candidatoQueries.excluirCandidato(parseInt(id, 10), queryRunner);
        
        if (resultado) {
            await queryRunner.commitTransaction();
            
            res.status(200).json({ mensagem: 'Candidato excluído com sucesso.' });
        } else {
            await queryRunner.rollbackTransaction();
            
            res.status(404).json({ error: 'Candidato não encontrado.' });
        }
    } catch (error) {
        await queryRunner.rollbackTransaction();
        
        console.error('Erro ao excluir candidato:', error);
        res.status(500).json({ error: 'Erro ao excluir candidato.' });
    } finally {
        await queryRunner.release();
    }
};
