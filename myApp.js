var express = require('express');
var moment = require('moment');
var app = express();
console.log("Hello world");

var getTimestamp = function(date){

    let momentDateFormatted = moment(date,"YYYY-MM-DD");
    if(!momentDateFormatted.isValid()){
        momentDateFormatted = moment(parseInt(date));
    }
    return setTimestampObj(momentDateFormatted);
}

var setTimestampObj = function(momentDateFormatted){
    let timestamp = {
    unix : momentDateFormatted.unix(),
    utc :  momentDateFormatted.utc()
    };
    return timestamp;
}

exports.getTimestamp = getTimestamp;