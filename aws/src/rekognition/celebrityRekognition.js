const awsUtils = require('../awsUtils');
const fileUtils = require('../file_utils');

const celebrityRekognitionPayload = __dirname + '/assets/celebrityRekognitionPayload.json';


awsUtils.recog.detectFaces(fileUtils.readFile(celebrityRekognitionPayload), function (err, data) {
    if (err) {
        console.log(err, err.stack);
    } else {
        console.log(JSON.stringify(data));
    }
});