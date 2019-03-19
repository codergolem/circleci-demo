const request = require('request');
const AWS = require('aws-sdk');
const CIRCLE_CI_TOKEN = process.env.CIRCLE_CI_TOKEN;
const circleciUrl = 'https://circleci.com/api/v1.1/project/github/codergolem/circleci-demo/envvar?circle-token=' + CIRCLE_CI_TOKEN;
const iam = new AWS.IAM();

exports.handler = (event, context) => {
    const params = {
        UserName: "circle-ci"
    };
    iam.createAccessKey(params).promise().then(function (data) {
        const accessKeyId = data.AccessKey.AccessKeyId;
        console.log('keyId: ' + accessKeyId);
        const secretKey = data.AccessKey.SecretAccessKey;
        const payload = {
            name: 'AWS_ACCESS_KEY',
            value: accessKeyId,
        };
        request({
            method: 'POST',
            uri: circleciUrl,
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(payload)
        }, (err, res, body) => {
            if (err) {
                return console.log(err);
            }
            console.log(body);
        });
    }).catch(error => console.log(error));
};
