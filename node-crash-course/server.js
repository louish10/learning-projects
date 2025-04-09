import http from 'http';

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end('<h1>Home</h1>');
    } else if (req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end('<h1>About</h1>');
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'})
        res.end('<h1>Not Found</h1>');
    }
})

const port = process.env.PORT
server.listen(port, () => { console.log(`Connected to ${port}`) })
