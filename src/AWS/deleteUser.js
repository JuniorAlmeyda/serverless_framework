
const AWS = require('aws-sdk');

const deleteUser = async (event) => {

  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const { id } = event.pathParameters;

  const { Item } = await dynamodb.get({
    TableName: 'UserTable',
    Key: {
      id
    }
  }).promise();

  if(!Item) {
    return {
      status: 400,
      msg: `We can't find the user with this id, ${id}`
    }
  }

  await dynamodb.delete({
    TableName: 'UserTable',
    Key: { id }
  }).promise();

  return {
    status: 200,
    msg: 'User deleted'
  }

}

module.exports = {
  deleteUser
}