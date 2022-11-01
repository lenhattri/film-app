
var modelToObjects = require('../tools/modelToObjects');
var modelToObjectOne = require('../tools/modelToObjectOne');
var moment = require('moment');
var Movie = require('../databases/models/Movie')



class categoriesControllers {
    index(req, res, next) {
        Movie.find({ 'categories': decodeURI(req.query.c) })
            .then((movies) => {
                movies =modelToObjects(movies);
                if(movies.length !=0){
                    res.render('categories/categories', {
                        movies,
                        category: {category: decodeURI(req.query.c)}
                    });
                } else {
                    res.render('error404');
                }
            })
            .catch(next);

    }
}

module.exports = new categoriesControllers();