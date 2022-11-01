var Movie = require('../databases/models/Movie');
var modelToObjects = require('../tools/modelToObjects');
var modelToObjectOne = require('../tools/modelToObjectOne');
var slugHero = require('mongoose-slug-hero');
var timeFormat = require('../tools/timeFormat');
slugHero.config.counter = 'slug_counters';
class watchMovieControllers {
    index(req, res, next) {
        Promise.all([
            Movie.aggregate([
                {
                    $sort: { views: -1 }
                }
            ]),
            Movie.aggregate([
                {
                    $sort: { updatedAt: -1 }
                },
                {
                    $limit: 20
                }

            ])

        ])
            .then(([hotMovies, newMovies]) => {
                var hotThreeMovies = hotMovies.slice(0, 3);
                var otherHotMovies = hotMovies.slice(3, 10);
                res.render('watchMovie/mainPage', {
                    hotThreeMovies,
                    otherHotMovies,
                    newMovies
                });
            }
            )
            .catch(next);
    }
    details(req, res, next) {
        Movie.findOne({ 'slug': req.params.slug })
            .then((movie) => {
                movie = modelToObjectOne(movie);
                movie.release = timeFormat(movie.release)
                res.render('watchMovie/details', { movie });
            })
            .catch(next);
    }
    watch(req, res, next) {
        Promise.all([Movie.aggregate([{
            $match: {
                slug: req.params.slug
            }
        }, {
            $sample: { size: 1 }
        }]), Movie.aggregate([{
            $sample: { size: 6 }
        },
        {
            $match: {
                slug: { $not: { $eq: req.params.slug } },

            }
        }
        ])])
            .then(([recentMovie, otherMovies]) => {

                recentMovie[0].script = recentMovie[0].script.slice(0, 200);
                res.render('watchMovie/watching', {
                    recentMovie: recentMovie[0],
                    otherMovies
                });

            })

            .catch(next);
        Movie.findOne({ 'slug': req.params.slug })
            .then((movie) => {
                var viewsCout = movie.views + 1;
                Movie.updateOne(movie, { views: viewsCout })
                    .then(() => console.log(movie.slug + ": +1 views. Recent views: " + (movie.views + 1)));
            })
            .catch(next);
    }

}
module.exports = new watchMovieControllers();