import express from 'express';
import * as habilidadesController from '../controllers/habilidadeController';

const router = express.Router();

router.post('/:candidato_id/habilidades', habilidadesController.criarHabilidade);

router.get('/:candidato_id/habilidades', habilidadesController.obterHabilidades);

router.put('/:candidato_id/habilidades/:habilidade_id', habilidadesController.atualizarHabilidade);

router.delete('/:candidato_id/habilidades/:habilidade_id', habilidadesController.excluirHabilidade);

export default router;
