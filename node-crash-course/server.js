import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async (req, res) => {
    try {
        console.log(`${req.method} - ${req.url}`)
        if (req.method === 'GET') {
            let filePath;
            if (req.url === '/') {
                filePath = path.join(__dirname, "public", "index.html");
            } else if (req.url === '/about') {
                filePath = path.join(__dirname, "public", "about.html");
            } else {
                throw new Error('Not Found')
            }
            const data = await fs.readFile(filePath);
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            res.end()
        } else {
            throw new Error('Method not allowed')
        }
    } catch (error) {
        console.log(error)
        res.writeHead(500, {'Content-Type': 'text/plain'})
        res.end('Server error');

    }


})

const port = process.env.PORT
server.listen(port, () => { console.log(`Connected to ${port}`) })
