import express from 'express';
import * as candidatoController from '../controllers/candidatoController';

const router = express.Router();

router.post('/', candidatoController.criarCandidato);

router.get('/', candidatoController.obterCandidatos);

router.get('/:id', candidatoController.obterCandidatoPorId);

router.put('/:id', candidatoController.atualizarCandidato);

router.delete('/:id', candidatoController.excluirCandidato);

export default router;
