import { AppDataSource } from '../config/ormconfig';
import Habilidade from '../models/habilidade';

export const criarHabilidade = async (dados: any) => {
    const habilidadeRepository = AppDataSource.getRepository(Habilidade);
    
    const novaHabilidade = habilidadeRepository.create(dados);
    
    return await habilidadeRepository.save(novaHabilidade);
};

export const obterHabilidades = async (candidato_id: number) => {
    const habilidadeRepository = AppDataSource.getRepository(Habilidade);
    
    return await habilidadeRepository.find({
        where: { candidato_id },
    });
};

export const atualizarHabilidade = async (candidato_id: number, habilidade_id: number, dados: any) => {
    const habilidadeRepository = AppDataSource.getRepository(Habilidade);
    
    const habilidade = await habilidadeRepository.findOne({
        where: { candidato_id, habilidade_id },
    });

    if (habilidade) {
        habilidadeRepository.merge(habilidade, dados);
        return await habilidadeRepository.save(habilidade);
    }

    return null;
};

export const excluirHabilidade = async (candidato_id: number, habilidade_id: number) => {
    const habilidadeRepository = AppDataSource.getRepository(Habilidade);
    
    const habilidade = await habilidadeRepository.findOne({
        where: { candidato_id, habilidade_id },
    });

    if (habilidade) {
        return await habilidadeRepository.remove(habilidade);
    }

    return null;
};
