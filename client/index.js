const http = require("http");
const fs = require("fs");

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
  fs.readFile("./client/home.html", (err, data) => {
    res.write(data);
    return res.end();
  });
});

server.listen(port, hostname, () => {
  console.log(`server running at http://${hostname}:${port}`);
});
