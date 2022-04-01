const AWS = require('aws-sdk');
const { v4 } = require('uuid');

const createUser = async (event) => {

  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const { name, lastName, dni } = JSON.parse(event.body);
  const createAt = new Date().getTime();
  const id = v4();

  const user = {
    id,
    name,
    lastName,
    dni,
    createAt
  }

  await dynamodb.put({
    TableName: 'UserTable',
    Item: user
  }).promise();

  return {
    status: 200,
    user 
  }

}

module.exports = {
  createUser
}