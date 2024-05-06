import express from 'express';
import * as experienciaProfissionalController from '../controllers/experienciaProfissionalController';

const router = express.Router();

router.post('/:candidato_id/experiencias', experienciaProfissionalController.criarExperiencia);

router.get('/:candidato_id/experiencias', experienciaProfissionalController.obterExperiencias);

router.put('/:candidato_id/experiencias/:experiencia_id', experienciaProfissionalController.atualizarExperiencia);

router.delete('/:candidato_id/experiencias/:experiencia_id', experienciaProfissionalController.excluirExperiencia);

export default router;
