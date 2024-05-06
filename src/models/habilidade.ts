import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import Candidato from './candidato';

@Entity({ name: 'habilidades' }) 
class Habilidade {
    @PrimaryGeneratedColumn()
    habilidade_id!: number;

    @Column({ type: 'int', nullable: false })
    candidato_id!: number;

    @Column({ type: 'varchar', length: 50, nullable: false })
    habilidade!: string;

    @Column({ type: 'varchar', length: 20, nullable: false })
    nivel!: string;

    @ManyToOne(() => Candidato, candidato => candidato.habilidades, {
        onDelete: 'CASCADE', 
    })
    candidato!: Candidato;
    
}

export default Habilidade;
