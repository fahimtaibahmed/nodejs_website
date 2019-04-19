const express = require('express');
const app= express();

// relative path
const path = require('path');
const router = express.Router();

router.get('/css',(request, response)=>{
  response.sendFile(path.join(__dirname+'/css/index.css'));
});

router.get('/',(request, response)=>{
  response.sendfile(path.join(__dirname+'/index.html'));
});

router.get('/prediction',(request, response)=>{
  response.sendfile(path.join(__dirname+'/prediction.html'));
});

app.use('/', router);
app.listen(process.env.port || 3000);

console.log('running at port 3000');



// const http = require('http');
// const fs = require('fs');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
  
//   fs.readFile('./index.html', null, function (error, data) {
//     if (error) {
//         res.writeHead(404);
//         res.write('Whoops! File not found!');
//     } else {
//         res.write(data);
//     }
//     res.end();
//   });

// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
