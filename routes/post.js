import express from 'express';
import { createPost, deletePost, getPost, getPosts, updatePost } from '../controllers/postController.js'
const router = express.Router();



// get all post
router.get('/', getPosts);

//single post
router.get('/:id', getPost);

router.post('/', createPost);

//update Post
router.put('/:id', updatePost);

//delete Post
router.delete('/:id', deletePost);

export default router;
