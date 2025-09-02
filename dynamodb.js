const AWS = require('aws-sdk');
const documentClient = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = process.env.TABLE_NAME || 'WeatherAlerts';

async function saveAlert(alert) {
    const params = {
        TableName: TABLE_NAME,
        Item: alert
    };
    try {
        await documentClient.put(params).promise();
    } catch (error) {
        console.error('Error saving alert:', error);
        throw new Error('Could not save alert');
    }
}

module.exports = { saveAlert };