var http = require("http");
var fs = require("fs");
var url = require("url");

//require 요구하다.

var app = http.createServer((request, response) => {
  var _url = request.url;
  // console.log(_url);
  var queryData = url.parse(_url, true).query;
  // console.log(queryData.id);

  var pathName = url.parse(_url, true).pathname;

  var title = queryData.id;

  console.log(url.parse(_url, true));

  // if (_url === "/" || _url === "/index.html") {
  //   // _url = "/index.html";
  //   title = "Welcome";
  // }

  // if (_url === "/favicon.ico") {
  //   return response.writeHead(404);
  // }
  if (pathName === "/") {
    if (queryData.id === undefined) {
      var title = "Welcom";
      var description = "Hello, Node.js";
      var template = `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="index.html">WEB</a></h1>
      <ul>
        <li><a href="/?id=HTML">HTML</a></li>
        <li><a href="/?id=CSS">CSS</a></li>
        <li><a href="/?id=JavaScript">JavaScript</a></li>
      </ul>
      <h2>${title}</h2>
      <p>${description}</p>
    </body>
    </html>
    
    `;
      response.writeHead(200);
      response.end(template);
    } else {
      fs.readFile(`data/${queryData.id}.txt`, "utf8", (err, description) => {
        var title = queryData.id;
        var template = `
          <!doctype html>
          <html>
          <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
          </head>
          <body>
            <h1><a href="index.html">WEB</a></h1>
            <ul>
              <li><a href="/?id=HTML">HTML</a></li>
              <li><a href="/?id=CSS">CSS</a></li>
              <li><a href="/?id=JavaScript">JavaScript</a></li>
            </ul>
            <h2>${title}</h2>
            <p>${description}</p>
          </body>
          </html>
          `;

        response.writeHead(200);
        response.end(template);
      });
    }
  } else {
    response.writeHead(404);
    response.end("NotFound");
  }

  //response.end() 웹브라우저의 요청에 응답하는 명령어.
});
app.listen(3000);
