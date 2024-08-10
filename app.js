import express, { response } from 'express';
import path from 'path';
import url from 'url';
import posts from './routes/post.js';
import logger from './middleware/logger.js';
import error from './middleware/error.js';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))

const PORT = process.env.PORT;
const hostname = '127.0.0.1';

// Logger middleware
app.use(logger);

// app.use(express.static(path.join(__dirname, 'public')));

// Routes
logger*app.use('/api/posts', posts);

app.use(errorHandler);


app.listen(PORT, hostname, () => {
  console.log(` server is running on http://${hostname}:${PORT}/`);
});
