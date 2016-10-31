var express = require('express');
var router = express.Router();
var controller = require('../controller/controller_api')

/* GET All memo */
router.get('/', controller.showAllData);

// Post new memo
router.post('/', controller.addNewMemo);

//edit memo
router.put('/:id', controller.updateMemoJson)

//delete memo
router.delete('/:id', controller.deleteMemoJson)

module.exports = router;
