
### SRC FILE
You can find the code in the src file. In the AWS file you can find all logic about a little CRUD using SERVERLESS FRAMEWORK. 
On the other hand, in the SWAPI file, you can find the logic about the integration with SWAPI API, you can only see one endpoint requesting information about a person.
Finally, in the helpers file, you can find a dictionary that it's used to translate from English to Espanish the properties from the SWAPI'S Object

### ENDPOINTS
You have to know this concepts
BASE_URL: https://34kpi5hsce.execute-api.us-west-2.amazonaws.com
ID_SWAPI: this is the person's id from SWAPI API
UID: this is a unique id of a user in DynamoDB

To request information about a person using SWAPI API, the route is:
BASE_URL/getPersonFromSWAPI/ID_SWAPI
the method for this route is GET

To create a User and save this information in DynamoDB, the route is:
BASE_URL/createUser
The method for this route is POST and you have to send a body, similar like this:
{
  "name": "name_value",
  "lastName": "lastName_value",
  "dni": "dni_value"
}

To get all users from DynamoDB, the route is:
BASE_URL/getUsers
The method for this route is GET

To get a user by id from DynamoDB, the route is:
BASE_URL/getUser/UID
The method for this route is GET

To update user's information by id from DynamoDB, the route is:
BASE_URL/updateUser/UID
the method for this route is PUT

To delete user's information by id from DynamoDB, the route is:
BASE_URL/deleteUser/UID
The method for this route is DELETE



