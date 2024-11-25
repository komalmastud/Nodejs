const http = require("http");
const fs = require("fs");
const url = require("url"); // Corrected the module

const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();

  // Log the request
  const log = `${Date.now()}: ${req.method} ${req.url} New Req Received\n`;
  fs.appendFile("log.txt", log, (err) => {
    if (err) {
      console.error("Error writing to log file:", err);
    }
  });

  // Parse the URL
  const myUrl = url.parse(req.url, true);
  // Corrected the logging

  // Handle routes
  switch (myUrl.pathname) {
    case "/":
      if (req.method === "GET") res.end("Welcome to the Home Page!");
      break;

    case "/about":
      const username = myUrl.query.myname || "Guest";
      res.end(`Hi, ${username}`);
      break;

    case "/search":
      const search = myUrl.query.search_query || "nothing";
      res.end("Here are your results for " + search);
      break;

    case "/signup":
      if (req.method === "GET") res.end("This is a signup form");
      else if (req.method === "POST") {
        res.end("Sucess");
      }
    default:
      res.statusCode = 404;
      res.end("404 Not Found");
      break;
  }
});

// Start the server
myServer.listen(8000, () => console.log("Server Started!"));
