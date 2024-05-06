import { QueryRunner } from 'typeorm';
import ExperienciaProfissional from '../models/experiencia';
import Educacao from '../models/educacao';
import Habilidade from '../models/habilidade';
import Idioma from '../models/Idioma';
import Candidato from '../models/candidato';
import { AppDataSource } from '../config/ormconfig';

export const criarCandidato = async (dados: any, queryRunner: QueryRunner): Promise<Candidato> => {
    try {
        const candidatoRepository = queryRunner.manager.getRepository(Candidato);
        const novoCandidato = candidatoRepository.create({
            nome: dados.nome,
            email: dados.email,
            telefone: dados.telefone,
            data_nascimento: dados.data_nascimento,
            endereco: dados.endereco
        });

        const candidatoCriado = await candidatoRepository.save(novoCandidato);

        const candidato_id = candidatoCriado.candidato_id;

        await Promise.all([
            salvarExperiencias(dados.experiencias, candidato_id, queryRunner),
            salvarEducacoes(dados.educacoes, candidato_id, queryRunner),
            salvarHabilidades(dados.habilidades, candidato_id, queryRunner),
            salvarIdiomas(dados.idiomas, candidato_id, queryRunner),
        ]);

        return candidatoCriado;
    } catch (error) {
        console.error('Erro ao criar candidato:', error);
        throw error;
    }
};


async function salvarExperiencias(experiencias: any[], candidato_id: number, queryRunner: QueryRunner) {
    if (!experiencias) return;
    const experienciasEntidades = experiencias.map((exp: any) => {
        return queryRunner.manager.create(ExperienciaProfissional, {
            ...exp,
            candidato_id,
        });
    });
    await queryRunner.manager.save(experienciasEntidades);
}

async function salvarEducacoes(educacoes: any[], candidato_id: number, queryRunner: QueryRunner) {
    if (!educacoes) return;
    const educacoesEntidades = educacoes.map((edu: any) => {
        return queryRunner.manager.create(Educacao, {
            ...edu,
            candidato_id,
        });
    });
    await queryRunner.manager.save(educacoesEntidades);
}

async function salvarHabilidades(habilidades: any[], candidato_id: number, queryRunner: QueryRunner) {
    if (!habilidades) return;
    const habilidadesEntidades = habilidades.map((hab: any) => {
        return queryRunner.manager.create(Habilidade, {
            ...hab,
            candidato_id,
        });
    });
    await queryRunner.manager.save(habilidadesEntidades);
}

async function salvarIdiomas(idiomas: any[], candidato_id: number, queryRunner: QueryRunner) {
    if (!idiomas) return;
    const idiomasEntidades = idiomas.map((idi: any) => {
        return queryRunner.manager.create(Idioma, {
            ...idi,
            candidato_id,
        });
    });
    await queryRunner.manager.save(idiomasEntidades);
}









export const obterCandidatos = async (queryRunner: QueryRunner): Promise<Candidato[]> => {
    try {
        const query = `
            SELECT
                c.candidato_id,
                c.nome,
                c.email,
                c.telefone,
                c.data_nascimento,
                c.endereco,
                -- Dados de educação
                e.educacao_id,
                e.instituicao,
                e.grau_academico,
                e.data_inicio AS educacao_data_inicio,
                e.data_fim AS educacao_data_fim,
                e.descricao AS educacao_descricao,
                -- Dados de experiências profissionais
                exp.experiencia_id,
                exp.empresa,
                exp.cargo,
                exp.data_inicio AS experiencia_data_inicio,
                exp.data_fim AS experiencia_data_fim,
                exp.descricao AS experiencia_descricao,
                -- Dados de habilidades
                h.habilidade_id,
                h.habilidade,
                h.nivel AS habilidade_nivel,
                -- Dados de idiomas
                i.idioma_id,
                i.nome AS idioma_nome,
                i.nivel AS idioma_nivel
            FROM
                candidato c
            LEFT JOIN
                educacao e ON c.candidato_id = e.candidato_id
            LEFT JOIN
                experiencias_profissionais exp ON c.candidato_id = exp.candidato_id
            LEFT JOIN
                habilidades h ON c.candidato_id = h.candidato_id
            LEFT JOIN
                idioma i ON c.candidato_id = i.candidato_id
            ORDER BY
                c.candidato_id;
        `;

        const result = await queryRunner.query(query);

        const candidatosMap: Record<number, Candidato> = {};

        for (const row of result) {
            const candidatoId = row.candidato_id;

            let candidato = candidatosMap[candidatoId];
            if (!candidato) {
                candidato = new Candidato();
                candidato.candidato_id = row.candidato_id;
                candidato.nome = row.nome;
                candidato.email = row.email;
                candidato.telefone = row.telefone;
                candidato.data_nascimento = row.data_nascimento;
                candidato.endereco = row.endereco;

                candidato.experiencias = [];
                candidato.educacoes = [];
                candidato.habilidades = [];
                candidato.idiomas = [];

                candidatosMap[candidatoId] = candidato;
            }

            if (row.experiencia_id) {
                const experiencia = new ExperienciaProfissional();
                experiencia.experiencia_id = row.experiencia_id;
                experiencia.empresa = row.empresa;
                experiencia.cargo = row.cargo;
                experiencia.data_inicio = row.experiencia_data_inicio;
                experiencia.data_fim = row.experiencia_data_fim;
                experiencia.descricao = row.experiencia_descricao;
                candidato.experiencias?.push(experiencia);
            }

            if (row.educacao_id) {
                const educacao = new Educacao();
                educacao.educacao_id = row.educacao_id;
                educacao.instituicao = row.instituicao;
                educacao.grau_academico = row.grau_academico;
                educacao.data_inicio = row.educacao_data_inicio;
                educacao.data_fim = row.educacao_data_fim;
                educacao.descricao = row.educacao_descricao;
                candidato.educacoes?.push(educacao);
            }

            if (row.habilidade_id) {
                const habilidade = new Habilidade();
                habilidade.habilidade_id = row.habilidade_id;
                habilidade.habilidade = row.habilidade;
                habilidade.nivel = row.habilidade_nivel;
                candidato.habilidades?.push(habilidade);
            }

            if (row.idioma_id) {
                const idioma = new Idioma();
                idioma.idioma_id = row.idioma_id;
                idioma.nome = row.idioma_nome;
                idioma.nivel = row.idioma_nivel;
                candidato.idiomas?.push(idioma);
            }
        }

        return Object.values(candidatosMap);
    } catch (error) {
        console.error('Erro ao obter candidatos:', error);
        throw new Error('Erro ao obter candidatos com campos relacionados.');
    }
};




export const obterCandidatoPorId = async (id: number, queryRunner: QueryRunner): Promise<Candidato | null> => {
    try {
        const query = `
            SELECT
                c.candidato_id,
                c.nome,
                c.email,
                c.telefone,
                c.data_nascimento,
                c.endereco,
                -- Dados de educação
                e.educacao_id,
                e.instituicao,
                e.grau_academico,
                e.data_inicio AS educacao_data_inicio,
                e.data_fim AS educacao_data_fim,
                e.descricao AS educacao_descricao,
                -- Dados de experiências profissionais
                exp.experiencia_id,
                exp.empresa,
                exp.cargo,
                exp.data_inicio AS experiencia_data_inicio,
                exp.data_fim AS experiencia_data_fim,
                exp.descricao AS experiencia_descricao,
                -- Dados de habilidades
                h.habilidade_id,
                h.habilidade,
                h.nivel AS habilidade_nivel,
                -- Dados de idiomas
                i.idioma_id,
                i.nome AS idioma_nome,
                i.nivel AS idioma_nivel
            FROM
                candidato c
            LEFT JOIN
                educacao e ON c.candidato_id = e.candidato_id
            LEFT JOIN
                experiencias_profissionais exp ON c.candidato_id = exp.candidato_id
            LEFT JOIN
                habilidades h ON c.candidato_id = h.candidato_id
            LEFT JOIN
                idioma i ON c.candidato_id = i.candidato_id
            WHERE
                c.candidato_id = $1
            ORDER BY
                c.candidato_id;
        `;

        const result = await queryRunner.query(query, [id]);

        if (result.length === 0) {
            return null;
        }

        const candidato = new Candidato();
        candidato.candidato_id = result[0].candidato_id;
        candidato.nome = result[0].nome;
        candidato.email = result[0].email;
        candidato.telefone = result[0].telefone;
        candidato.data_nascimento = result[0].data_nascimento;
        candidato.endereco = result[0].endereco;

        candidato.experiencias = [];
        candidato.educacoes = [];
        candidato.habilidades = [];
        candidato.idiomas = [];

        for (const row of result) {
            if (row.experiencia_id) {
                const experiencia = new ExperienciaProfissional();
                experiencia.experiencia_id = row.experiencia_id;
                experiencia.empresa = row.empresa;
                experiencia.cargo = row.cargo;
                experiencia.data_inicio = row.experiencia_data_inicio;
                experiencia.data_fim = row.experiencia_data_fim;
                experiencia.descricao = row.experiencia_descricao;
                candidato.experiencias?.push(experiencia);
            }

            if (row.educacao_id) {
                const educacao = new Educacao();
                educacao.educacao_id = row.educacao_id;
                educacao.instituicao = row.instituicao;
                educacao.grau_academico = row.grau_academico;
                educacao.data_inicio = row.educacao_data_inicio;
                educacao.data_fim = row.educacao_data_fim;
                educacao.descricao = row.educacao_descricao;
                candidato.educacoes?.push(educacao);
            }

            if (row.habilidade_id) {
                const habilidade = new Habilidade();
                habilidade.habilidade_id = row.habilidade_id;
                habilidade.habilidade = row.habilidade;
                habilidade.nivel = row.habilidade_nivel;
                candidato.habilidades?.push(habilidade);
            }

            if (row.idioma_id) {
                const idioma = new Idioma();
                idioma.idioma_id = row.idioma_id;
                idioma.nome = row.idioma_nome;
                idioma.nivel = row.idioma_nivel;
                candidato.idiomas?.push(idioma);
            }
        }

        return candidato;
    } catch (error) {
        console.error('Erro ao obter candidato:', error);
        throw new Error('Erro ao obter candidato por ID com campos relacionados.');
    }
};


export const excluirCandidato = async (id: number, queryRunner: QueryRunner) => {
    const candidatoRepository = queryRunner.manager.getRepository(Candidato);
    
    const candidato = await candidatoRepository.findOne({
        where: { candidato_id: id },
        relations: ['experiencias', 'educacoes', 'habilidades', 'idiomas'],
    });

    if (candidato) {
        await candidatoRepository.remove(candidato);
        return true;
    }

    return false;
};

export const atualizarCandidato = async (id: number, dados: any, queryRunner: QueryRunner) => {
    const candidatoRepository = queryRunner.manager.getRepository(Candidato);
    
    const candidato = await candidatoRepository.findOne({
        where: { candidato_id: id },
        relations: ['experiencias', 'educacoes', 'habilidades', 'idiomas'],
    });

    if (candidato) {
        Object.assign(candidato, dados);

        await candidatoRepository.save(candidato);
        return true;
    }

    return false;
};
