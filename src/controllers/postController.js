const Post = require("../models/Post");

exports.createPost = async (req, res) => {
  const { title, content } = req.body;
  const post = new Post({
    title,
    content,
    author: req.userId,
  });

  await post.save();
  res.status(201).json({ message: "Post created" });
};

exports.getAllPosts = async (req, res) => {
  const userId = req.userId;
  const posts = await Post.find({ author: userId }).populate("author", "username");
  res.json(posts);
};

exports.getPostById = async (req, res) => {
  const postId = req.params.postId;
  const post = await Post.findById(postId).populate("author", "username");
  if (!post) return res.status(404).json({ message: "Post not found" });
  res.json(post);
};

exports.deletePostById = async (req, res) => {
  const postId = req.params.postId;
  try {
    await Post.deleteOne({ _id: postId });
    res.json({ message: "User post deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user post" });
  }
};
