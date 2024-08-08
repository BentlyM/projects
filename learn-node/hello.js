import http from 'http'
import fs from 'fs/promises'
import url from 'url';
import path from 'path';

const hostname = '127.0.0.1';
const PORT = process.env.PORT || 8000;

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);

console.log(__dirname);
console.log(__filename);

const server = http.createServer(async (request, response) => {
 try{
  if(request.method === 'GET'){
    let filepath;
    if(request.url == '/'){
      filepath = path.join(__dirname , 'index.html')
    }else if(request.url == '/about'){
      filepath = path.join(__dirname , 'About.html')
    }else{
      throw new Error('Not Found')
    }

    const data = await fs.readFile(filepath);
    response.setHeader('Content-type', 'text/html');
    response.write(data);
    response.end();

  }else{
    throw new Error('Method not allowed...')

  }
 }catch(e){
  response.writeHead(200 , {'content-Type': 'text/plain'});
    response.end(`<h1>${e}</h1>`)
 }
});

server.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
});