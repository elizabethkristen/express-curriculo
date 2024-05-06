import { AppDataSource } from '../config/ormconfig';
import ExperienciaProfissional from '../models/experiencia';

export const criarExperiencia = async (dados: any) => {
    const experienciaRepository = AppDataSource.getRepository(ExperienciaProfissional);
    
    const novaExperiencia = experienciaRepository.create(dados);
    
    return await experienciaRepository.save(novaExperiencia);
};

export const obterExperiencias = async (candidato_id: number) => {
    const experienciaRepository = AppDataSource.getRepository(ExperienciaProfissional);
    
    return await experienciaRepository.find({
        where: { candidato_id },
    });
};

export const atualizarExperiencia = async (candidato_id: number, experiencia_id: number, dados: any) => {
    const experienciaRepository = AppDataSource.getRepository(ExperienciaProfissional);
    
    const experiencia = await experienciaRepository.findOne({
        where: { candidato_id, experiencia_id },
    });

    if (experiencia) {
        experienciaRepository.merge(experiencia, dados);
        return await experienciaRepository.save(experiencia);
    }

    return null;
};

export const excluirExperiencia = async (candidato_id: number, experiencia_id: number) => {
    const experienciaRepository = AppDataSource.getRepository(ExperienciaProfissional);
    
    const experiencia = await experienciaRepository.findOne({
        where: { candidato_id, experiencia_id },
    });

    if (experiencia) {
        return await experienciaRepository.remove(experiencia);
    }

    return null;
};
