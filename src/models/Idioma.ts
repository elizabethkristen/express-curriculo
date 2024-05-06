import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import Candidato from './candidato';

@Entity()
class Idioma {
    @PrimaryGeneratedColumn()
    idioma_id!: number;

    @Column({ type: 'varchar', length: 50, nullable: false })
    nome!: string;

    @Column({ type: 'varchar', length: 20, nullable: false })
    nivel!: string;

    @ManyToOne(() => Candidato, candidato => candidato.idiomas, { onDelete: 'CASCADE' })
    candidato!: Candidato;

    @Column({ nullable: false })
    candidato_id!: number;
}

export default Idioma;
