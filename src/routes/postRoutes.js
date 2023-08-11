const express = require('express');
const postController = require('../controllers/postController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.use(authMiddleware);

router.post('/create', postController.createPost);
router.get('/all/:userId', postController.getAllPosts);
router.get('/:postId', postController.getPostById);
router.delete('/:postId', postController.deletePostById);

module.exports = router;