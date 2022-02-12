// const { Console } = require('console');
// const fs = require('fs')
// const http = require('http');

// const port = process.env.PORT || 3000;

// const server = http.createServer((req, res)=>{
//     res.setHeader('Content-Type', 'text/html');
//     console.log(req.url);
//     if(req.url == '/'){
//         res.statusCode = 200;
//         res.end('<h1>This is HTTP Module of Node.Js</h1> <p>Hey this is the way to rock the world');
//     }
//     else if(req.url == '/about'){
//         res.statusCode = 200;
//         res.end('<h1>This is about me</h1> <p>This is all about me!</p>');
//     }
//     else if(req.url == '/main'){
//         res.statusCode = 200;
//         const data = fs.readFileSync('index.html');
//         res.end(data.toString());
//     }
//     else if(req.url == '/sm'){
//         res.statusCode = 200;
//         res.end('<h1>Hey This is my Website</h1>')
//     }
//     else{
//         res.statusCode = 404;
//         res.end('<h1>This page was not found</h1> <p>Hey, this page was not found on the server </p>');
//     }
// });

// server.listen(port, ()=>{
//     console.log(`Server is listening on port ${port}`);
// })