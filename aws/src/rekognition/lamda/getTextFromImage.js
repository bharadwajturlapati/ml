const AWS = require('aws-sdk/index');
const rekognition = new AWS.Rekognition();

const getTextFromImage = function(payload, resolve, reject){
    var response = {
    };
    rekognition.detectText(payload, function (err, data) {
        if (err) {
            response.statusCode = 500;
            response.data = JSON.stringify(err);
            response.err = true;
            reject(response);
        } else {
            response.statusCode = 200;
            response.data = JSON.stringify(data);
            response.err = false;
            resolve(response);
        }
    });
};

exports.handler = async (event, context, callback) => {
    return new Promise((resolve, reject)=>{
        getTextFromImage(event, resolve, reject);
    });
};