let http = require("http");
let fs = require("fs");
let url = require("url");

//require 요구하다.

let app = http.createServer((request, response) => {
  let _url = request.url;
  // console.log(_url);
  let queryData = url.parse(_url, true).query;
  console.log(queryData.id);

  if (_url === "/") {
    _url = "/index.html";
  }

  if (_url === "/favicon.ico") {
    return response.writeHead(404);
  }

  response.writeHead(200);

  response.end(queryData.id); //
  //response.end() 웹브라우저의 요청에 응답하는 명령어.
});
app.listen(4000);
