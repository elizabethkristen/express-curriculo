import { AppDataSource } from '../config/ormconfig';
import Idioma from '../models/Idioma';

export const criarIdioma = async (dados: any) => {
    const idiomaRepository = AppDataSource.getRepository(Idioma);
    
    const novoIdioma = idiomaRepository.create(dados);
    
    return await idiomaRepository.save(novoIdioma);
};

export const obterIdiomas = async (candidato_id: number) => {
    const idiomaRepository = AppDataSource.getRepository(Idioma);
    
    return await idiomaRepository.find({
        where: { candidato_id },
    });
};

export const atualizarIdioma = async (candidato_id: number, idioma_id: number, dados: any) => {
    const idiomaRepository = AppDataSource.getRepository(Idioma);
    
    const idioma = await idiomaRepository.findOne({
        where: { candidato_id, idioma_id },
    });

    if (idioma) {
        idiomaRepository.merge(idioma, dados);
        return await idiomaRepository.save(idioma);
    }

    return null;
};

export const excluirIdioma = async (candidato_id: number, idioma_id: number) => {
    const idiomaRepository = AppDataSource.getRepository(Idioma);
    
    const idioma = await idiomaRepository.findOne({
        where: { candidato_id, idioma_id },
    });

    if (idioma) {
        return await idiomaRepository.remove(idioma);
    }

    return null;
};
