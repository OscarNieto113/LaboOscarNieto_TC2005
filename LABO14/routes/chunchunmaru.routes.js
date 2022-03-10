const express = require('express');
const router = express.Router();

const chunchunmaruController = require('../controllers/chunchunmaru_controller');

router.get('/mistborn', chunchunmaruController.get_mistborn);
router.post('/mistborn', chunchunmaruController.post_mistborn);

router.get('/standalones', chunchunmaruController.get_standalones);
router.post('/standalones', chunchunmaruController.post_standalones);

router.get('/storm', chunchunmaruController.get_storm);
router.post('/storm', chunchunmaruController.post_storm);

router.get('/whitesand', chunchunmaruController.get_whitesand);
router.post('/whitesand', chunchunmaruController.post_whitesand);

router.use('/', chunchunmaruController.listar);

module.exports = router;
