let http = require("http");
let fs = require("fs");

let app = http.createServer((request, response) => {
  let url = request.url;
  if (request.url === "/") {
    url = "/index.html";
  }

  if (request.url === "/favicon.ico") {
    return response.writeHead(404);
  }

  response.writeHead(200);

  console.log(__dirname + url);
  response.end(fs.readFileSync(__dirname + url));
  //response.end() 웹브라우저의 요청에 응답하는 명령어.
});
app.listen(4000);
