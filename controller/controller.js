'use strict'
var memo = require('../models/memo')

module.exports = {
    getHome: function(req, res, next) {
        res.render('index', {title: 'Cool Memo'});
    },
    createMemo: function(req, res, next) {
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
    },
    showAllMemo: function(req, res, next) {
        memo.find({}, (err, data) => {
            res.render('list', {data, title: "List Memo"})
        })
    },
    updateMemo: function(req, res, next) {
        memo.findOne({
            _id: req.params.id
        }, (err, data) => {
            res.render('update', {data})
        })
    },
    postUpdateMemo: function(req, res, next) {
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
    },
    deleteMemo: function(req, res, next) {
        memo.remove({
            _id: req.params.id
        }, (err) => {
            if (err) {
                return handleError(err)
            } else {
                res.redirect('/list')
            }
        })
    },
    getAjaxPage: function(req, res, next) {
        res.render('ajax', {title: 'AJAX TABLE'})
    }
}
