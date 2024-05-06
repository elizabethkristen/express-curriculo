import express from 'express';
import candidatoRoutes from './routes/candidatoRoutes';
import 'reflect-metadata';
import { AppDataSource } from './config/ormconfig'; 

const app = express();
const port = 3000;

app.use(express.json());

app.use('/candidatos', candidatoRoutes);

AppDataSource.initialize()
    .then(() => {
        console.log('Conexão com o banco de dados estabelecida com sucesso.');

        app.listen(port, () => {
            console.log(`Servidor rodando na porta ${port}`);
        });
    })
    .catch((error) => {
        console.error('Erro ao conectar com o banco de dados:', error);
        process.exit(1);
    });
