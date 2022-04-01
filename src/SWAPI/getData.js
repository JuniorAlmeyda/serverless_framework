"use strict";
const swapi = require('swapi-node');
const polyglot = require('../helpers/dictionary');

const getDataFromSWAPI = async(event) => {
  try {
    let newData = {};
    const { id } = event.pathParameters;
    const data = await swapi.people({ id });
    const properties = Object.keys(data);
    const values = Object.values(data);
    for (let i = 0; i < properties.length; i++) {
      newData[polyglot.t(properties[i])] = values[i]    
    }
    return {
      status: 200,
      data: newData
    }
  } catch (error) {
    return {
      status: 400,
      data: `We can't find data for this id`
    }
  }
}

module.exports = {
  getDataFromSWAPI
}