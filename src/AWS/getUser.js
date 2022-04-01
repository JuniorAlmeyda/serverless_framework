
const AWS = require('aws-sdk');

const getUser = async (event) => {

  try {
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

    return {
      status: 200,
      user: Item
    }
  } catch (error) {
    console.log(error);
  }

}

module.exports = {
  getUser
}