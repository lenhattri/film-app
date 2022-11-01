var homeRouter = require('./routers/homeRouter');
var movieFormRouter = require('./routers/movieFormRouter');
var watchMovieRouter = require('./routers/watchMovieRouter');
var categoriesRouter =require('./routers/categoriesRouter')
function routerIndex(app){
    app.use('/categories',categoriesRouter)
    app.use('/movie-form',movieFormRouter);
    app.use('/watch-movie', watchMovieRouter);
    app.use('/', homeRouter);
    
}

module.exports = routerIndex;