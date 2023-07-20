const http = require("http"),
  url = require("url");

const fs = require("fs");
const path = require("path");

const HOSTNAME = "localhost";
const PORT = 5050;

const FILE_PATH = `${path.resolve(__dirname)}/text.txt`;

http
  .createServer(function (request, response) {
    writeToTextFile(request.url)
      .then(() => readFile())
      .then((data) => response.end(data))
      .catch((err) => {
        response.writeHead(500);
        response.end(err);
      });
  })
  .listen(PORT, () => {
    console.log(`Server is listening http://${HOSTNAME}:${PORT}`);
  });

function writeToTextFile(text) {
  return new Promise((resolve, reject) =>
    fs.writeFile(FILE_PATH, `${text}\n`, {
      flag: "a",
    },
      (error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      })
  );
}

function readFile() {
  return new Promise((resolve, reject) => {
    fs.readFile(FILE_PATH, "utf8", (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}