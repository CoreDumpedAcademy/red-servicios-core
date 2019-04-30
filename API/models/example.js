'use-strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ExampleSchema = Schema({
    foo: String,
    object: {
        foo: {type: String},
        bar: {type: String}
    },
    number: Number
})

module.exports = mongoose.model('Example', ExampleSchema)