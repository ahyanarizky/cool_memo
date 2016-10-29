var express = require('express');
var router = express.Router();
var memo = require('../models/memo')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {title: 'Cool Memo'});
});

router.post('/post', function(req, res, next) {
    memo.create({
        title: req.body.title,
        content: req.body.content,
        tags: req.body.tags
    }, (err, data) => {
        if (err) {
            return handleError(err);
        } else {
            res.redirect('/list')
        }
    })
})

router.get('/list', function(req, res, next) {
    memo.find({}, (err, data) => {
        res.render('list', {data, code: "list"})
    })
})

router.get('/update/:id', function(req, res, next) {
    memo.findOne({
        _id: req.params.id
    }, (err, data) => {
        console.log(data);
        res.render('update', {data})
    })
})

router.post('/update/:id', function(req, res, next) {
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
            res.redirect('/list')
        }
    })
})

module.exports = router;
