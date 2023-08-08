const express = require('express');
const postController = require('../controllers/postController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.use(authMiddleware);

router.post('/create', postController.createPost);
router.get('/all', postController.getAllPosts);
router.get('/:id', postController.getPostById);

module.exports = router;