import express from 'express';
const router = express.Router();

let posts = [
  { id: 1, title: 'post one' },
  { id: 2, title: 'two one' },
  { id: 3, title: 'three one' },
];

const logger = (req, res, next) => {
  console.log(
    `${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`
  );
  next();
};

// get all post
router.get('/', (req, res) => {
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }
  res.status(200).json(posts);
});

//single post
router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    const error = new Error(`a post with the id of ${id} was not found`);
    return next(error);
  }

  res.status(200).json(post);
});

router.post('/', (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };

  if (!newPost.title) {
    return res.status(400).json({ msg: 'Please Enter Title' });
  }

  posts.push(newPost);
  res.status(201).json(posts);
});

//update Post
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res
      .status(400)
      .json({ msg: `A post the id of ${id} was not found` });
  }

  post.title = req.body.title;
  res.status(200).json(post);
});

//delete Post
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res
      .status(404)
      .json({ msg: `A post the id of ${id} was not found` });
  }

  posts = posts.filter((post) => post.id !== id);
  res.status(200).json(posts);
});

export default router;
