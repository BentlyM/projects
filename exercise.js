import http from 'http';
import url from 'url';

const server = http.createServer((req, res) => {
  const urlParse = url.parse(req.url, true);
  const name = urlParse.query.name;

  if(name){
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Hello, ${name}!`);
  }else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
