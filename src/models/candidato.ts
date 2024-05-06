import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import ExperienciaProfissional from './experiencia';
import Educacao from './educacao';
import Habilidade from './habilidade';
import Idioma from './Idioma';

@Entity()
class Candidato {
    @PrimaryGeneratedColumn()
    candidato_id!: number;

    @Column({ type: 'varchar', length: 100, nullable: false })
    nome!: string;

    @Column({ type: 'varchar', length: 100, nullable: false, unique: true })
    email!: string;

    @Column({ type: 'varchar', length: 15, nullable: false })
    telefone!: string;

    @Column({ type: 'date', nullable: false })
    data_nascimento!: Date;

    @Column({ type: 'varchar', length: 255, nullable: true })
    endereco?: string;

    @OneToMany(() => ExperienciaProfissional, experiencia => experiencia.candidato, {
        cascade: ['insert', 'update'],
    })
    experiencias?: ExperienciaProfissional[];
    

    @OneToMany(() => Educacao, educacao => educacao.candidato, {
        cascade: ['insert', 'update'],
    })
    educacoes?: Educacao[];
    

    @OneToMany(() => Habilidade, habilidade => habilidade.candidato, {
        cascade: ['insert', 'update'],
    })
    habilidades?: Habilidade[];
    

    @OneToMany(() => Idioma, idioma => idioma.candidato, {
        cascade: ['insert', 'update'],
    })
    idiomas?: Idioma[];
    
}

export default Candidato;
