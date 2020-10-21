exports.handler = function (event, context, callback) {
  const random = Math.floor(Math.random() * 5);
  if (random !== 1) {
    callback(null, {
      statusCode: 400,
      error: "Forced error"
    });
  } else {
    callback(null, {
    statusCode: 200,
    body: true,
  });
  }
};
