"use strict";

exports.hello = async (event) => {
  //get method
  if (event.requestContext.http.method == "GET") {
    return {
      body: JSON.stringify({message: "hello from get"}),
      statusCode: 200,
      headers: {"Content-Type": "application/json"}
    }
  }
  //post method
  else if (event.requestContext.http.method == "POST") {
    return {
      body: JSON.stringify({message: "hello from post"}),
      statusCode: 200,
      headers: {"Content-Type": "application/json"}
    }
  }
};