var moment = require('moment');

function timeFormat(time){
    return moment(time).format('YYYY-MM-DD');
}

module.exports =timeFormat;