
## SRC FILE
You can find the code in the src file. In the AWS file you can find all logic about a little CRUD using SERVERLESS FRAMEWORK. 
On the other hand, in the SWAPI file, you can find the logic about the integration with SWAPI API, you can only see one endpoint requesting information about a person.
Finally, in the helpers file, you can find a dictionary that it's used to translate from English to Espanish the properties from the SWAPI'S Object
***
## ENDPOINTS
You have to know this concepts
1. __BASE_URL:__ _https://34kpi5hsce.execute-api.us-west-2.amazonaws.com_
2. __ID_SWAPI:__ _this is the person's id from SWAPI API_
3. __UID:__ _this is a unique id of a user in DynamoDB_

To request information about a person using SWAPI API, the route is: __BASE_URL/getPersonFromSWAPI/ID_SWAPI__ the method for this route is GET

To create a User and save this information in DynamoDB, the route is: __BASE_URL/createUser__ the method for this route is POST and you have to send a body, similar like this:
```
{
  "name": "name_value",
  "lastName": "lastName_value",
  "dni": "dni_value"
}
```

To get all users from DynamoDB, the route is: ___BASE_URL/getUsers__ the method for this route is GET

To get a user by id from DynamoDB, the route is: __BASE_URL/getUser/UID___ the method for this route is GET

To update user's information by id from DynamoDB, the route is: ___BASE_URL/updateUser/UID__ the method for this route is PUT

To delete user's information by id from DynamoDB, the route is: ___BASE_URL/deleteUser/UID___ the method for this route is DELETE



