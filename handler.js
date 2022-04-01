"use strict";
const swapi = require('swapi-node');

module.exports.hello = async (event) => {
  const data = await swapi.people({ id: 1 }).then((result) => {
    return result;
  });
  console.log('data', data);
  const homeworld = await swapi.planets({ id: 1 }).then((result) => {
    return result
  });
  console.log('homeworld', homeworld);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "hola!!",
        data,
        homeworld
      },
      null,
      2
    ),
  };
};
