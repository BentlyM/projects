import http from 'http';
import url from 'url';
import path from 'path';
import fs from 'fs/promises';

const PORT = process.env.PORT || 8080;
const hostname = '127.0.0.1';

const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
  { id: 3, name: 'Jim Doe' },
];

const logger = (req, res, next) => {
  console.log(`${req.method}, ${req.url}`);
  next();
};

const handleGetRequest = async (req, res) => {
  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  try {
    let filepath = '';
    switch (req.url) {
      case '/api/users':
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(users));
        if (users) return;
        break;
      case '/about':
        filepath = path.join(__dirname, 'public', 'about.html');
        break;
      case '/':
        filepath = path.join(__dirname, 'public', 'index.html');
        break;
      default:
        if (req.url.match(/\/api\/users\/([0-9]+)/)) {
          const id = req.url.split('/')[3];
          const user = users.find((user) => user.id === parseInt(id));
          if (user) {
            res.end(JSON.stringify(user));
            return;
          } else {
            throw new Error('User does not exist');
          }
        }

        throw new Error('unable to find path');
    }

    res.setHeader('Content-Type', 'application/json');
    const data = await fs.readFile(filepath);
    res.end(data);
  } catch (e) {
    res.end(`${e}`);
  }
};

const handlePostRequest = (req, res) => {
  try{
    if(req.url === '/api/users'){
      let body = '';
  
    req.on('data', (chunk) => {
          body += chunk.toString();
      });
      req.on('end', ()=>{
          const newUser = JSON.parse(body);
          users.push(newUser);
          res.statusCode = 201;
          res.write(JSON.stringify({newUser}));
          res.end();
      })
    }else{
      throw new Error('invalid request...');
    }
  }catch(e){
    res.end(`${e}`);
  }
};

const server = http.createServer((request, response) => {
  try {
    logger(request, response, () => {
      switch (request.method) {
        case 'GET':
          handleGetRequest(request, response);
          break;
        case 'POST':
          handlePostRequest(request, response);
          break;
        default:
          throw new Error('Error Method not supported');
      }
    });
  } catch (e) {
    response.setHeader('Content-Type', 'text/plain');
    response.end(`${e}`);
  }
});

server.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
});
