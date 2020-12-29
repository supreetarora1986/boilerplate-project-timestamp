var express = require('express');
var moment = require('moment');
var app = express();
console.log("Hello world");

var getTimestamp = function(date){
    if(date){
    console.log('Date is '+date);
        let momentDateFormatted = moment.utc(date,"YYYY-MM-DD");
        if(!momentDateFormatted.isValid()){
            let unixDate = new Date(parseInt(date));
            if(isNaN(unixDate.getTime())){
                return {error: 'Invalid Date'}
            }else{
            momentDateFormatted = moment(unixDate.getTime());
            }
        }
        return setTimestampObj(momentDateFormatted);
    }else{
        return setTimestampObj("");
    }
}

var setTimestampObj = function(momentDateFormatted){
    let timestamp = {
    unix : momentDateFormatted != "" ? parseInt(momentDateFormatted.format('x')) : moment().format('x'),
    utc :  momentDateFormatted != "" ? momentDateFormatted.utc().format("ddd, DD MMM YYYY HH:mm:ss \\G\\M\\T") : moment().utc().format("ddd, DD MMM YYYY HH:mm:ss \\G\\M\\T")
    };
    return timestamp;
}

exports.getTimestamp = getTimestamp;