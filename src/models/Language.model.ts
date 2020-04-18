

const mongoose =require('mongoose');
// import {MongoHelper}  from "../core/helper/Mongo.helper" ;
// // bar_db_connect.js for bar app
// // mongo.
// // var mongoose=mongo
const Schema = mongoose.Schema;

const LangugeSchema = new Schema({
    name: {
        type: String,
        required: 'Enter the name',
        trim: true
    },
    keyName: {
        type: String,
        required: 'Enter a key',
        trim: true
    },
    shortName: {
        type: String,
        required: 'Enter a shortName',
        trim: true           
    },
    // created_at: {
    //     type: Date,
    //     default: Date.now
    // },
    // updated_at: {
    //     type: Date,
    //     default: Date.now
    // }
});
module.exports = mongoose.model('language', LangugeSchema);