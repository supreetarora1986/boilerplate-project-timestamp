var express = require('express');
var moment = require('moment');
var app = express();
console.log("Hello world");

var getTimestamp = function(date){
    if(date){
        let momentDateFormatted;
        if(isNaN(date)){
        console.log(date);
            let localDate = new Date(date);
            if(!isValidDate(localDate)){
                  return {error: 'Invalid Date'}
             }
             momentDateFormatted = moment.utc([localDate.getUTCFullYear(),localDate.getUTCMonth(),localDate.getDate()]);
        }else{
            let localDate = new Date(parseInt(date));
            if(!isValidDate(localDate)){
                return {error: 'Invalid Date'}
            }else{
             momentDateFormatted = moment(localDate.getTime());
            }
        }
        console.log(momentDateFormatted);
        return setTimestampObj(momentDateFormatted);
    }else{
        return setTimestampObj("");
    }
}

var isValidDate = function(date){
        return !isNaN(date.getTime());
}

var setTimestampObj = function(momentDateFormatted){
    let timestamp = {
    unix : momentDateFormatted != "" ? parseInt(momentDateFormatted.format('x')) : parseInt(moment().format('x')),
    utc :  momentDateFormatted != "" ? momentDateFormatted.utc().format("ddd, DD MMM YYYY HH:mm:ss \\G\\M\\T") : moment().utc().format("ddd, DD MMM YYYY HH:mm:ss \\G\\M\\T")
    };
    return timestamp;
}

exports.getTimestamp = getTimestamp;