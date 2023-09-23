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

const badRequest = (request, response) => {
  response.writeHead(400, { 'Content-Type': request.headers.accept });

  let content;
  if (request.headers.accept === 'text/xml') {
    content = '<response><message>Missing valid query parameter set to true</message><id>badRequest</id></response>';
  } else {
    content = {
      message: 'Missing valid query parameter set to true',
      id: 'badRequest',
    };
    content = JSON.stringify(content);
  }

  response.write(content);
  response.end();
};

const unauthorizedRequest = (request, response) => {
  response.writeHead(401, { 'Content-Type': request.headers.accept });

  let content;
  if (request.headers.accept === 'text/xml') {
    content = '<response><message>Missing loggedIn query parameter set to yes</message><id>unauthorized</id></response>';
  } else {
    content = {
      message: 'Missing loggedIn query parameter set to yes',
      id: 'unauthorized',
    };
    content = JSON.stringify(content);
  }

  response.write(content);
  response.end();
};

const forbiddenRequest = (request, response) => {
  response.writeHead(403, { 'Content-Type': request.headers.accept });

  let content;
  if (request.headers.accept === 'text/xml') {
    content = '<response><message>You do not have access to this content.</message><id>forbidden</id></response>';
  } else {
    content = {
      message: 'You do not have access to this content.',
      id: 'forbidden',
    };
    content = JSON.stringify(content);
  }

  response.write(content);
  response.end();
};

const internalRequest = (request, response) => {
  response.writeHead(500, { 'Content-Type': request.headers.accept });

  let content;
  if (request.headers.accept === 'text/xml') {
    content = '<response><message>Internal Server Error. Something went wrong.</message><id>internalError</id></response>';
  } else {
    content = {
      message: 'Internal Server Error. Something went wrong.',
      id: 'internalError',
    };
    content = JSON.stringify(content);
  }

  response.write(content);
  response.end();
};

const notImplementedRequest = (request, response) => {
  response.writeHead(501, { 'Content-Type': request.headers.accept });

  let content;
  if (request.headers.accept === 'text/xml') {
    content = '<response><message>A get request for this page has not been implemented yet. Check again later for updated content.</message><id>notImplemented</id></response>';
  } else {
    content = {
      message: 'A get request for this page has not been implemented yet. Check again later for updated content.',
      id: 'notImplemented',
    };
    content = JSON.stringify(content);
  }

  response.write(content);
  response.end();
};

const notFound = (request, response) => {
  response.writeHead(404, { 'Content-Type': request.headers.accept });

  let content;
  if (request.headers.accept === 'text/xml') {
    content = '<response><message>The page you are looking for was not found.</message><id>notFound</id></response>';
  } else {
    content = {
      message: 'The page you are looking for was not found.',
      id: 'notFound',
    };
    content = JSON.stringify(content);
  }

  response.write(content);
  response.end();
};

module.exports.successRequest = successRequest;
module.exports.badRequest = badRequest;
module.exports.unauthorizedRequest = unauthorizedRequest;
module.exports.forbiddenRequest = forbiddenRequest;
module.exports.internalRequest = internalRequest;
module.exports.notImplementedRequest = notImplementedRequest;
module.exports.notFound = notFound;
