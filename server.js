const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/") {
    res.end("<h1>Welcome to Smart Utility Toolkit</h1>");
  } else if (req.url === "/about") {
    res.end("<h1>About Page</h1><p>This is a Node.js HTTP Server.</p>");
  } else if (req.url === "/contact") {
    res.end("<h1>Contact Page</h1><p>Welcome to the contact page.</p>");
  } else {
    res.statusCode = 404;
    res.end("<h1>404 - Page Not Found</h1>");
  }
});

server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
