var express = require('express');
var router = express.Router();
var controller = require('../controller/controller')

/* GET home page. */
router.get('/', controller.getHome);
router.post('/post', controller.createMemo)
router.get('/list', controller.showAllMemo)
router.get('/update/:id', controller.updateMemo)
router.post('/update/:id', controller.postUpdateMemo)
router.get('/delete/:id', controller.deleteMemo)
router.get('/ajax', controller.getAjaxPage)

module.exports = router;
