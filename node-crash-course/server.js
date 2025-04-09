import http from 'http';

const server = http.createServer((req, res) => {
    res.writeHead(500, {'Content-Type': 'application/json'})
    res.end(JSON.stringify({message: "Error"}));
})

const port = 3000
server.listen(port, () => { console.log(`Connected to ${port}`) })
