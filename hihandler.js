"use strict";

module.exports.hi = async (event) => {
  debugger;
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: `hi, the current time is ${new Date().toTimeString()}!`,
          input: event,
        },
        null,
        2
      ),
    };
  };