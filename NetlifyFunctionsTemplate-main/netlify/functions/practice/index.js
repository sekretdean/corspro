//We export the function
exports.handler = async function (event, context) {
  //Fetch request details from event object
  const { path, httpMethod, headers, queryStringParameters, body } = event;
  // return some JSON data with a status of 200
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      // "Access-Control-Allow-Origin": "*",
      // "Access-Control-Allow-Methods": "*",
      // "Access-Control-Allow-Headers": "*",
    },
    body: JSON.stringify({
      path,
      httpMethod,
      queryStringParameters,
      headers,
      body: body ? JSON.parse(body) : "none",
    }),
  };
};
