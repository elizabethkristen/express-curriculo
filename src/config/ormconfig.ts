import { DataSource } from 'typeorm';
import Candidato from '../models/candidato';
import ExperienciaProfissional from '../models/experiencia';
import Educacao from '../models/educacao';
import Habilidade from '../models/habilidade';
import Idioma from '../models/Idioma';

export const AppDataSource = new DataSource({
    type: 'postgres', 
    host: 'monorail.proxy.rlwy.net', 
    port: 52701, 
    username: 'postgres', 
    password: 'nxFRuSeIYjyDBgTOkYJgxIaCgLBZKDqi', 
    database: 'postgres',
    synchronize: true, 
    logging: false, 
    entities: [Candidato, ExperienciaProfissional, Educacao, Habilidade, Idioma], 
});

