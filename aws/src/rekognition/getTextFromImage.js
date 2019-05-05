const awsUtils = require('../awsUtils');
const fileUtils = require('../file_utils');

const textInImagePayload = __dirname + '/assets/textInImagePayload.json';


awsUtils.recog.detectText(fileUtils.readFile(textInImagePayload), function (err, data) {
    if (err) {
        console.log(err, err.stack);
    } else {
        console.log(data);
    }
});