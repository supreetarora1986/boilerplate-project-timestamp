var express = require('express');
var moment = require('moment');
var app = express();
console.log("Hello world");

var getTimestamp = function(date){

    let momentDateFormatted = moment.utc(date,"YYYY-MM-DD");
    if(!momentDateFormatted.isValid()){
        momentDateFormatted = moment(parseInt(date));
    }
    return setTimestampObj(momentDateFormatted);
}

var setTimestampObj = function(momentDateFormatted){
    let timestamp = {
    unix : parseInt(momentDateFormatted.format('x')),
    utc :  momentDateFormatted.utc().format("ddd, DD MMM YYYY HH:mm:ss \\G\\M\\T")
    };
    return timestamp;
}

exports.getTimestamp = getTimestamp;