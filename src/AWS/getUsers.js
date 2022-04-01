
const AWS = require('aws-sdk');

const getUsers = async (event) => {

  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const { Items } = await dynamodb.scan({
    TableName: 'UserTable'
  }).promise();

  return {
    status: 200,
    ...((Items.length > 0) ? { users: Items } : {msg: `We don't have users in our database`})
  }

}

module.exports = {
  getUsers
}