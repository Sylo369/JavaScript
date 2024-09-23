const http = require("http");
const fs = require("fs");
const path = require("path");

// Specify the directory you want to read
const directoryPath = "D:\\Storage\\NodeJS\\First-Try"; // Your specified directory

// Create the server
const server = http.createServer((req, res) => {
  // Check if the request is for the root URL
  if (req.method === "GET" && req.url === "/") {
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        res.writeHead(500);
        res.end("Error reading directory");
        return;
      }

      // Create HTML for the directory listing
      let html = "<h1>Directory Listing</h1><ul>";
      files.forEach((file) => {
        html += `<li><a href="/${file}">${file}</a></li>`;
      });
      html += "</ul>";

      // Send the HTML response
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(html);
    });
  } else if (req.method === "GET") {
    const filePath = path.join(directoryPath, req.url); // Use the requested URL directly

    // Serve the requested file
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end("File not found");
        return;
      }

      // Set headers to prompt download
      res.writeHead(200, {
        "Content-Type": "application/octet-stream",
        "Content-Disposition": `attachment; filename="${path.basename(
          filePath
        )}"`,
      });
      res.end(data);
    });
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

// Server listens on port 3000
server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
