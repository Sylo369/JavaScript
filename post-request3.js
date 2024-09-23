const http = require("http");

const options = {
  hostname: "localhost",
  port: 3000,
  path: "/",
  method: "GET",
};

const req = http.request(options, (res) => {
  let data = "";

  // Listen for data chunks
  res.on("data", (chunk) => {
    data += chunk;
  });

  // Once all data is received
  res.on("end", () => {
    console.log("Response: Test");
  });
});

req.on("error", (e) => {
  console.error(`Problem with request: ${e.message}`);
});

// End the request
req.end();
