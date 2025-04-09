import { createServer } from 'http';

const users = [
  {id: 1, name: 'John Doe'},
  {id: 2, name: 'Jane Doe'},
  {id: 3, name: 'Jim Doe'},
]

const server = createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  if (req.url === '/api/users' && req.method === 'GET') {
    res.write(JSON.stringify(users));
    res.end();
  } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {

    const id = req.url.split('/')[3];
    const user = users.find((user) => user.id === parseInt(id));

    if (user) {
      res.write(JSON.stringify(user));
    } else {
      res.statusCode = 404;
      res.write(JSON.stringify({message: 'User not found'}));
    }
  } else {
    res.statusCode = 404;
    res.write(JSON.stringify({message: 'not found'}));
  }
  res.end();

});

server.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
