// file system module
const fs = require('fs');

// read a file in synchronously, these are loaded into memory as soon as node starts up :)
// __dirname is a global of node, allows us to specify relative paths from CURRENT file
const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const page2 = fs.readFileSync(`${__dirname}/../client/client2.html`);

// response is an object
const getIndex = (request, response) => {
  // we write a status code and JSON obj of the headers to send back
  // (we're sending it back as html instead of raw text)
  response.writeHead(200, { 'Content-Type': 'text/html' });
  // we can use response.write as many times as we want, allows us to write data to our response
  response.write(index);
  // send response, cannot call write after this!!!!!!!!!!!
  response.end();
};

const getPage2 = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(page2);
  response.end();
};

// we gotta make things public to server thru exports
module.exports.getIndex = getIndex;
module.exports.getPage2 = getPage2;
