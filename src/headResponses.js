const successRequest = (request, response) => {
  response.writeHead(200, { 'Content-Type': request.headers.accept });

  let content;
  if (request.headers.accept === 'text/xml') {
    content = '<response><message>This is a successful response</message></response>';
  } else {
    content = {
      message: 'This is a successful response',
    };
    content = JSON.stringify(content);
  }

  response.write(content);
  response.end();
};

module.exports.successRequest = successRequest;
