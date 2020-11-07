var http = require("http");

const httpServer = http.createServer(handleServer).listen(8081);

function handleServer(req, res) {
  var url = req.url;
  if (url === "/welcome") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Welcome to Dominos!");
    res.end();
  } else if (url === "/contact") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(
      JSON.stringify({
        phone: "18602100000",
        email: "guestcaredominos@jublfood.com"
      })
    );
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
}

module.exports = httpServer;
