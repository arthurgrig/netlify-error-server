exports.handler = async function(event, context) {
  // Get status from query parameters, default to 500
  const statusParam = event.queryStringParameters && event.queryStringParameters.status;
  let status = parseInt(statusParam, 10);
  if (isNaN(status) || status < 100 || status > 599) {
    status = 500;
  }
  
  return {
    statusCode: status,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ error: `Status ${status}` })
  };
};
