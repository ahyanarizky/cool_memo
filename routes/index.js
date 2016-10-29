var express = require('express');
var router = express.Router();
var memo = require('../models/memo')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Cool Memo',
        code: "home"
    });
});

router.post('/post', function(req, res, next) {
    memo.create({
        title: req.body.title,
        content: req.body.content,
        tags: arrTags
    }, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
            res.redirect('/list')
        }
    })
})

router.get('/list', function(req, res, next) {
    memo.find({}, (err, data) => {
        res.render('list', {data, code: "list"})
    })
})

module.exports = router;
