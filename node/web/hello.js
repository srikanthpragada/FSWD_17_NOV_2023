const http = require('http');   // import library 

const server = http.createServer(
     (req, res) => {
        res.statusCode = 200;  // OK
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Hello World</h1>');
     }
);

server.listen(8888, 'localhost',
     () => { console.log('Server running...');}
);