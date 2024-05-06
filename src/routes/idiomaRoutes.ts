import express from 'express';
import * as idiomaController from '../controllers/idiomaController';

const router = express.Router();

router.post('/:candidato_id/idiomas', idiomaController.criarIdioma);

router.get('/:candidato_id/idiomas', idiomaController.obterIdiomas);

router.put('/:candidato_id/idiomas/:idioma_id', idiomaController.atualizarIdioma);

router.delete('/:candidato_id/idiomas/:idioma_id', idiomaController.excluirIdioma);

export default router;
