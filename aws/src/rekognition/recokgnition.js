const awsUtils = require('../awsUtils');
const fileutils = require('../file_utils');

const postComparefaces = __dirname + '/assets/recognitionPayload.json';


awsUtils.recog.compareFaces(fileutils.readFile(postComparefaces), function (err, data) {
    if (err) {
        console.log(err, err.stack);
    } else {
        console.log(data);
    }
});

