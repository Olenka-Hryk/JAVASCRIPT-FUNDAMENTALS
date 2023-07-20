const greetingMessage = require("./personalmodule.js");

const http = require("http");
const os = require("os");

const HOSTNAME = "localhost";
const PORT = 5050;

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    const message = greetingMessage(os.userInfo().username);
    response.write(message);
    response.end();
  })
  .listen(PORT, () => {
    console.log(`Server is listening http://${HOSTNAME}:${PORT}`);
  });