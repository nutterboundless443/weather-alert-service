const AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = async (event) => {
    // Logic to fetch weather data
    const weatherData = await fetchWeatherData();
    const alertMessage = createAlertMessage(weatherData);
    
    // Send notification
    await sendNotification(alertMessage);
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Weather alert sent successfully!' })
    };
};

async function fetchWeatherData() {
    // Pseudo code: Logic to retrieve weather data
    return { temperature: 35, condition: 'storm' };
}

function createAlertMessage(weatherData) {
    // Pseudo code: Custom alert generation logic
    return `Current temperature is ${weatherData.temperature} degrees, weather condition: ${weatherData.condition}`;
}

async function sendNotification(message) {
    const params = {
        Message: message,
        TopicArn: 'arn:aws:sns:us-east-1:123456789012:WeatherAlerts'
    };
    await sns.publish(params).promise();
}