const fetch = require("node-fetch")

//We export the function
exports.handler = async function (event, context) {
  //Fetch request details from event object
  const { path, httpMethod, headers, queryStringParameters, body } = event;
  // return some JSON data with a status of 200

  const response = await fetch("https://fervent-borg-34cc8d.netlify.app/.netlify/functions/practice")

  const data = await response.json()

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*",
    },
    body: JSON.stringify(await data),
  };
};
