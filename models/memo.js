'use strict'
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/coolmemo');
var memoSchema = mongoose.Schema({title: String, content: String, tags: String});
var Memo = mongoose.model('memo', memoSchema);

module.exports = Memo
