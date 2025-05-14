exports.handler = async function(event, context) {
  return {
    statusCode: 500,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ error: "Internal Server Error" })
  };
};
