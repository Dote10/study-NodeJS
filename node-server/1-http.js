const http = require("http");
//const http2 = require("http2"); // https

const server = http.createServer((req, res) => {
  console.log("incoming...");
  console.log(req.headers);
  //req의 header 정보
  console.log(req.httpVersion);
  //req에 담긴  httpVersion에 관한 정보
  console.log(req.method);
  //req가 어떤  method로 들어왔는지
  console.log(req.url);
  //req가 어떤 url로 요청하는지

  const url = req.url;

  if (url === "/") {
    res.write("Welcome!");
  } else if (url === "/courses") {
    res.write("Courses");
  } else {
    res.write("Not Found");
  }

  res.end();
});

server.listen(8070);
