const http = require('http')

http.createServer((request, response) => {
    let body = [];
    request.on('error', (err) => {
        console.error(err);
    }).on('data', (chunk) => {
        body.push(chunk.toString());

    }).on('end', ()=> {
        body = Buffer.concat(body).toString();
        console.log("body:",body);
        response.writeHead(200, {'Content-type': 'text/html'});
        response.end('IDontKnowWhatImDoing\n');
    });

}).listen(8080);

console.log("server started");