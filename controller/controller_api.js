'use strict'
var memo = require('../models/memo')

module.exports = {
    showAllData: function(req, res, next) {
        memo.find({}, (err, data) => {
            res.json(data)
        })
    },
    addNewMemo: function(req, res, next) {
        memo.create({
            title: req.body.title,
            content: req.body.content,
            tags: req.body.tags
        }, (err, data) => {
            res.json(data)
        })
    },
    updateMemoJson: function(req, res, next) {
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
    },
    deleteMemoJson: function(req, res, next) {
        memo.remove({
            _id: req.params.id
        }, (err) => {
            if (err) {
                res.json({message: 'Error deleting data'})
            } else {
                res.json({message: 'data successfully deleted'})
            }
        })
    }
}
