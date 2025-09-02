import AWS from 'aws-sdk';
const documentClient = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = process.env.TABLE_NAME || 'WeatherAlerts';

async function saveAlert(alert) {
    if (!alert || !alert.id || !alert.message) {
        throw new Error('Invalid alert structure. Missing id or message.');
    }
    if (!TABLE_NAME) {
        throw new Error('TABLE_NAME environment variable is not set.');
    }
    const params = {
        TableName: TABLE_NAME,
        Item: alert
    };
    try {
        await documentClient.put(params).promise();
    } catch (error) {
        console.error('Error saving alert:', error);
        throw new Error('Could not save alert: ' + error.message + ' for alert: ' + JSON.stringify(alert));
    }
}

export { saveAlert };