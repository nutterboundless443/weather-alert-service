const AWS = require('aws-sdk');
const documentClient = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = 'WeatherAlerts';

async function saveAlert(alert) {
    const params = {
        TableName: TABLE_NAME,
        Item: alert
    };
    await documentClient.put(params).promise();
}

module.exports = { saveAlert };