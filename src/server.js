// import these to pull them into scope
// then stick the module into a constant cos it does not change
// the ./ loads the file instead of a module :)
const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const textHandler = require('./textResponses.js');
const jsonHandler = require('./jsonResponses.js');

// now we make a port, cant do 80 for http or 443 for https cos they are reserved!! !!
// 3000 is a good dev port
// process is a global node var that describes the running process
// env inside of process is the environment variables
const port = process.env.PORT || process.env.NODE_PORT || 3000;


// start server and listen for traffic
// onrequest function will be invoked by the server every time a request comes in
// request and response is passed in so we can edit le response
const onRequest = (request, response) => {
  console.log(request.url);
  switch (request.url) {
    case '/':
      htmlHandler.getIndex(request, response);
      break;
    case '/page2':
      htmlHandler.getPage2(request, response);
      break;
    case '/hello':
        textHandler.getHello(request, response);
        break;
    case '/time':
        textHandler.getTime(request, response);
        break;
    case '/helloJSON':
        jsonHandler.getHelloJSON(request, response);
        break;
    case '/timeJSON':
        jsonHandler.getTimeJSON(request, response);
        break;
    default:
      htmlHandler.getIndex(request, response);
      break;
  }
};
// creates server, takes in the specified function, then accepts traffic
http.createServer(onRequest).listen(port);
console.log(`listening on 127.0.01: ${port}`);
