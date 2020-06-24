'use strict';

const core = require("./core");

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Detail view",
        input: event,
      },
      null,
      2
    ),
  };
};
