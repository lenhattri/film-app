var Movie = require('../databases/models/Movie');
var modelToObjects = require('../tools/modelToObjects');
var modelToObjectOne = require('../tools/modelToObjectOne');
var moment = require('moment');
const { sendStatus } = require('express/lib/response');

class MovieFormControllers {
    index(req, res, next) {
        Movie.find({})
            .then(movies => {
                movies = modelToObjects(movies);
                res.render('movieForm/movieForm', { movies })
            }
            )
            .catch(next);

    }
    create(req, res, next) {
        Movie.find({})
            .then(movies => {
                movies = movies.map(movie => movie.toObject());
                res.render('movieForm/movieFormCreate', { movies });
            }
            )
            .catch(next);
    }

    edit(req, res, next) {
        Movie.findById(req.params.id)
            .then(movie => {
                movie = modelToObjectOne(movie);
                movie.release = moment(movie.release).format('YYYY-MM-DD');

                res.render('movieForm/movieFormEdit', { movie });
            }
            )
            .catch(next);

    }
    //[POST METHOD*]
    creating(req, res, next) {
        Movie.findOne({ 'filmName': req.body.filmName }, function (err, movie) {
            console.log('testing');
            if (err) { res.status(500).send(err) };
            //Nếu đã có bộ phim này
            if (movie) {
                res.send("this film is available!");
                return 0;
            }
            //Lưu bộ phim vừa nhập vào csdl
            var newMovie = new Movie();
            //config
            newMovie.filmName = req.body.filmName;
            newMovie.categories = req.body.categories.trim().replace(',', ';').replace('.', ';').split(";");
            newMovie.image = req.body.image;
            newMovie.release = req.body.release;
            newMovie.script = req.body.script;
            newMovie.embed = req.body.embed;
            newMovie.views =0;
            newMovie.save()
                .then(() => {
                    res.redirect('/movie-form');
                })
                .catch(() => res.send('Thông tin nhập không hợp lệ!!!'));
        });
    }


    editing(req, res, next) {
        var categories = req.body.categories.trim().replace(',', ';').replace('.', ';').split(";");
        Movie.updateOne({ '_id': req.params.id }, {
            filmName: req.body.filmName,
            categories: categories,
            image: req.body.image,
            release: req.body.release,
            script: req.body.script,
            embed: req.body.embed,
        })
            .then(() => {

                res.send('<strong>Update Completed!!</strong>');
            })
            .catch(() => res.send('somthing went wrong!'));
    }

    deleting(req, res, next) {

    }
}

module.exports = new MovieFormControllers();