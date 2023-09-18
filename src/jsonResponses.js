const respondJSON = (request, response, status, object) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  // send response
  response.writeHead(status, headers);
  response.write(JSON.stringify(object));
  response.end();
};

// function for 404 not found requests with message
const notFound = (request, response) => {
  // create error message for response
  const responseJSON = {
    message: 'The page you are looking for was not found.',
    id: 'notFound',
  };

  // return a 404 with an error message
  respondJSON(request, response, 404, responseJSON);
};

const respondJSONMeta = (request, response, status) => {
  const headers = {
    'Content-Type': 'applications/json',
  };

  response.writeHead(status, headers);
  response.end();
};

// function for 404 not found without message
const notFoundMeta = (request, response) => {
  // return a 404 without an error message
  respondJSONMeta(request, response, 404);
};

module.exports.notFound = notFound;
module.exports.notFoundMeta = notFoundMeta;
