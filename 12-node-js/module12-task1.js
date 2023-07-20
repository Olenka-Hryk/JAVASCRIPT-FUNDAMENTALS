const http = require("http");
const os = require("os");
const path = require("path");
const PORT = 5000;

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write('<h1>System information</h1>');
    response.write(`<p>Current user name: ${os.userInfo().username}</p>`);
    response.write(`<p>OS type: ${os.type()}</p>`);
    response.write(`<p>System work time: ${(os.uptime()/60).toFixed(2)} minutes</p>`);
    response.write(`<p>Current work directory: ${path.dirname(__filename)}</p>`);
    response.write(`<p>Server file name: ${path.basename(__filename)}</p>`);
    response.end();
  })
  .listen(PORT, () => {
    console.log(`Server running at http://127.0.0.1:${PORT}/`);
  });