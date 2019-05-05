const awsUtils = require('../awsUtils');
const fileUtils = require('../file_utils');

const sceneDetectionPayload = __dirname + '/assets/sceneDetectionPayload.json';


awsUtils.recog.detectLabels(fileUtils.readFile(sceneDetectionPayload), function (err, data) {
    if (err) {
        console.log(err, err.stack);
    } else {
        console.log(JSON.stringify(data));
    }
});