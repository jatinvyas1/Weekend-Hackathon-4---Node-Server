var http = require("http");

const httpServer = http.createServer(handleServer).listen(8081);

function handleServer(req, res) {
  var url = req.url;
  if (url === "/welcome") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.write("Welcome to Dominos!");
  } else if (url === "/contact") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write({
      phone: "18602100000",
      email: "guestcaredominos@jublfood.com"
    });
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
}

module.exports = httpServer;
