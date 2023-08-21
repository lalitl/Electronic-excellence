//domain/.netlify/functions/hello(filename)

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: "hello there",
  };
};
