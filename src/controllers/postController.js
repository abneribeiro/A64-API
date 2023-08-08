const Post = require('../models/Post');

exports.createPost = async (req, res) => {
  const { title, content } = req.body;
  const post = new Post({
    title,
    content,
    author: req.userId,
  });

  await post.save();
  res.status(201).json({ message: 'Post created' });
};

exports.getAllPosts = async (req, res) => {
  const posts = await Post.find().populate('author', 'username');
  res.json(posts);
};

exports.getPostById = async (req, res) => {
  const postId = req.params.id;
  const post = await Post.findById(postId).populate('author', 'username');
  if (!post) return res.status(404).json({ message: 'Post not found' });
  res.json(post);
};