"use strict";

module.exports.hellopost = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "hello function here!",
        input: event,
      },
      null,
      2
    ),
  };
};