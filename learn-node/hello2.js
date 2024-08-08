//important file good for learning

import { createServer } from 'http';

const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
  { id: 3, name: 'Jim Doe' },
];

const hostname = '127.0.0.1';
const PORT = process.env.PORT || 8000;

//logger middleware
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

//JSON middleware
const jsonMiddleware = (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  next();
};

// Route Handler for GET /api/users
const getUsersHandler = (req, res) => {
  res.write(JSON.stringify(users));
  res.end();
};

// Router handler for GET /api/users/:id
const getUserByIdHandler = (req, res) => {
  const id = req.url.split('/')[3];
  const user = users.find((user) => user.id === parseInt(id));

  if (user) {
    res.write(JSON.stringify({ user }));
  } else {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 404;
    res.write(JSON.stringify({ message: 'User not found' }));
  }
  res.end();
};

//Route handler for POST /api/users
const createUserHandler = (req , res) => {
    let body = '';
    // listening for the data
    req.on('data', (chunk) => {
        body += chunk.toString();
    });
    req.on('end', ()=>{
        const newUser = JSON.parse(body);
        users.push(newUser);
        res.statusCod = 201;
        res.write(JSON.stringify({newUser}));
        res.end();
    })
}

// not found handler
const notFoundHandler = (req, res) => {
  res.statusCode = 404;
  res.write(JSON.stringify({ message: 'Route not found' }));
  res.end();
};

const server = createServer((req, res) => {
  logger(req, res, () => {
    jsonMiddleware(req, res, () => {
      if (req.url === '/api/users' && req.method === 'GET') {
        getUsersHandler(req, res);
      } else if (
        req.url.match(/\/api\/users\/([0-9]+)/) &&
        req.method === 'GET'
      ) {
        getUserByIdHandler(req, res);
      } else if (req.url === '/api/users' && req.method === 'POST') {
        createUserHandler(req , res);
      }else {
        notFoundHandler(req, res);
      }
    });
  });
});

server.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
});
