const express = require('express');
const app = express();

app.listen(8080, function(){
    console.log('listening on 8080');
    
});

// 터미널에서 node server.js
// (지우는 법은) 컨트롤 + c
// 브라우저에서 localhost: 8080

//get 요청
app.get('/hello', function(요청, 응답){
    응답.send('안녕하세요');
});