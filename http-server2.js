const http = require('http')

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.method === "GET") {
    if (req.url === "/") {
      res.writeHead(200);
      res.end(JSON.stringify({ message: "This is root dir" }));
    } else if (req.url === "/circle") {
      res.writeHead(200);
      res.end(JSON.stringify({ message: "This is circle dir" }));
    } else if (req.url === "/rectangle") {
      res.writeHead(200);
      res.end(JSON.stringify({ message: "This is rectangle dir" }));
    }
    else if (req.url === "/private") {
      res.writeHead(200);
      res.end(JSON.stringify({ message: "This is private dir"}));
    } 
    else {
      res.writeHead(404);
      res.end(JSON.stringify({ error: "This resource cannot be" }));
    }
  } else {
    res.writeHead(405);
    res.end(JSON.stringify({ error: "Method Not Allowed" }));
  }
});


server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
