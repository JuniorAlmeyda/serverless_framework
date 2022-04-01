
const AWS = require('aws-sdk');
const updateUser = async (event) => {

  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const { id } = event.pathParameters;
  const { lastName } = JSON.parse(event.body);

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

  await dynamodb.update({
    TableName: 'UserTable',
    Key: { id },
    UpdateExpression: "set lastName = :lastName",
    ExpressionAttributeValues: {
      ":lastName": lastName
    },
    ReturnValues: "ALL_NEW"
  }).promise();
  return {
    status: 200,
    msg: 'User Updated!!!'
  }

}

module.exports = {
  updateUser
}