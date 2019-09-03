//dynamic function!
const hello = 'Hello World :)';

//gets time
const getTimeString = () => {
    const d = new Date();
    const dateString = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    return dateString;
};

//send time forreal
const getTime = (request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain'});
    response.write(getTimeString());
    response.end();
};

//sends hello :)
const getHello = (request, response) => {
    response.writeHead(200, {'Content-Type':'text/plain'});
    response.write(hello);
    response.end();
};

//export all the functions AND time AND hello so JSON can do stuff nice
module.exports.hello = hello;
module.exports.getTimeString = getTimeString;
module.exports.getHello = getHello;
module.exports.getTime = getTime;