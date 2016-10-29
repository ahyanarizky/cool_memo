var express = require('express');
var router = express.Router();
var memo = require('../models/memo')

/* GET All memo */
router.get('/', function(req, res, next) {
    memo.find({}, (err, data) => {
        res.json(data)
    })
});

// Post new memo
router.post('/', function(req, res, next) {
    memo.create({
        title: req.body.title,
        content: req.body.content,
        tags: req.body.tags
    }, (err, data) => {
        res.json(data)
    })
});

//edit memo
router.put('/:id', function(req, res, next) {
    memo.update({
        _id: req.params.id
    }, {
        title: req.body.title,
        content: req.body.content,
        tags: req.body.tags
    }, (err) => {
        if (err) {
            return handleError(err)
        } else {
            res.json({message: 'data updated'})
        }
    })
})

//delete memo
router.delete('/:id', function(req, res, next) {
    memo.remove({
        _id: req.params.id
    }, (err) => {
        if (err) {
            return handleError(err)
        } else {
            res.json({message: 'data successfully deleted'})
        }
    })
})

module.exports = router;
