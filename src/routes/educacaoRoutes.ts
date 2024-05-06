import express from 'express';
import * as educacaoController from '../controllers/educacaoController';

const router = express.Router();

router.post('/:candidato_id/educacao', educacaoController.criarEducacao);

router.get('/:candidato_id/educacao', educacaoController.obterEducacoes);

router.put('/:candidato_id/educacao/:educacao_id', educacaoController.atualizarEducacao);

router.delete('/:candidato_id/educacao/:educacao_id', educacaoController.excluirEducacao);

export default router;
