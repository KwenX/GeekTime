const http = require("http");

const server = http.createServer((req, res) => {
    console.log("request recevied");
    console.log(req.headers);
    res.setHeader('ContentType', 'text/html');
    res.setHeader('X-Foo', 'bar');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(
`<html maaa=a >
<head>
    <style>
body div #myid{
    width: 100px;
    background-color: #ff5000;
}
body div img{
    width: 30px;
    background-color: #ff1111;
}
    </style>
</head>
<body>
    <div>
        <img id="myid'/>
        <img />
    </div>
</body>
</html>`);
});

server.listen(8081);































// const http = require('http')

// http.createServer((request, response) => {
//     let body = [];
//     request.on('error', (err) => {
//         console.error(err);
//     }).on('data', (chunk) => {
//         body.push(chunk.toString());

//     }).on('end', ()=> {
//         body = Buffer.concat(body).toString();
//         console.log("body:",body);
//         response.writeHead(200, {'Content-type': 'text/html'});
//         response.end('IDontKnowWhatImDoing\n');
//     });

// }).listen(8080);

// console.log("server started");