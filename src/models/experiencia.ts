import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import Candidato from './candidato';

@Entity({ name: 'experiencias_profissionais' }) 
class ExperienciaProfissional {
    @PrimaryGeneratedColumn()
    experiencia_id!: number;

    @Column({ type: 'int', nullable: false })
    candidato_id!: number;

    @Column({ type: 'varchar', length: 100, nullable: false })
    empresa!: string;

    @Column({ type: 'varchar', length: 50, nullable: false })
    cargo!: string;

    @Column({ type: 'date', nullable: false })
    data_inicio!: Date;

    @Column({ type: 'date', nullable: true })
    data_fim?: Date; 

    @Column({ type: 'text', nullable: true })
    descricao?: string; 

    @ManyToOne(() => Candidato, candidato => candidato.experiencias, {
        onDelete: 'CASCADE', 
    })
    candidato!: Candidato;
    
}

export default ExperienciaProfissional;
