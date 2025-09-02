const AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = async (event) => {
    // 获取天气数据逻辑
    const weatherData = await getWeatherData();
    const alertMessage = createAlert(weatherData);
    
    // 发送通知
    await sendNotification(alertMessage);
    return {
        statusCode: 200,
        body: JSON.stringify({ message: '天气预警发送成功!' })
    };
};

async function getWeatherData() {
    // 伪代码：获取天气数据逻辑
    return { temperature: 35, condition: 'storm' };
}

function createAlert(weatherData) {
    // 伪代码：自定义预警生成逻辑
    return `当前温度为${weatherData.temperature}度，天气情况：${weatherData.condition}`;
}

async function sendNotification(message) {
    const params = {
        Message: message,
        TopicArn: 'arn:aws:sns:us-east-1:123456789012:WeatherAlerts'
    };
    await sns.publish(params).promise();
}