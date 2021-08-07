const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome To my first Web-Page");
  }
  if (req.url === "/about") {
    res.end("Here is the History Of my First Page");
  }
  res.end(`
    <h1>OOPS!</h1>
    <p>we can't able to find page you are looking for</p>
    <a href="/">back home</a>`);
});

server.listen(5000);
