var mongoose = require('mongoose');
var slug= require('mongoose-slug-generator');
var Schema = mongoose.Schema;
mongoose.plugin(slug)
const movieSchema = new Schema({
    filmName: {type: String, required: true},
    categories: {type: Array, required: true},
    image:{type: String, required: true},
    release:{type: Date, required: true},
    script:{type: String, required: true},
    embed: {type: String, required: true},
    slug: { type: String, slug: 'filmName' },
    views: {type: Number}
},
    { timestamps: true });


var Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;