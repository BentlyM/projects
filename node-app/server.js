import http from 'http';
import url from 'url';
import path from 'path';
import fs from 'fs/promises';

const PORT = process.env.PORT || 8080;
const hostname = '127.0.0.1';

const logger = (req, res, next) => {
  console.log(`${req.url} , ${req.method}`);
  next();
};

const contentMiddleWare = (req, res, next) => {
  res.setHeader('Content-Type', 'text/html');
  next();
};

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer((request, response) => {
  logger(request, response, () => {
    contentMiddleWare(request, response, async () => {
      let filepath;
      try {
        switch (request.url) {
          case '/':
            if (request.method === 'GET') {
              filepath = path.join(__dirname, 'index.html');
            } else {
              throw new Error('Method not allowed...');
            }
            break;
          case '/about':
            if (request.method === 'GET') {
              filepath = path.join(__dirname, 'about.html');
            } else {
              throw new Error('Method not allowed...');
            }
            break;
          case '/contact':
            if (request.method === 'GET') {
              filepath = path.join(__dirname, 'contact-me.html');
            } else {
              throw new Error('Method not allowed...');
            }
            break;
          default:
            throw new Error('Not Found');
        }

        const data = await fs.readFile(filepath);
        response.setHeader('Content-type', 'text/html');
        response.write(data);
        response.end();
      } catch (e) {
        response.writeHead(403, { 'content-Type': 'text/plain' });
        response.end(`<h1>${e}</h1>`);
      }
    });
  });
});

server.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
});
