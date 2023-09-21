const Blog = require("../models/blog.model");

const addBlog = async (req, res) => {
  try {
    const { title, content } = req.body;

    const newBlog = new Blog({
      title,
      content,
      image: req.body.image,
    });
    if (!newBlog) res.json(newBlog);
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    console.log("error: ", error);
    res.json(error);
  }
};
const getAllBlog = async (req, res) => {
  try {
    const posts = await Blog.find().lean().exec();
    res.status(200).json(posts);
  } catch (error) {
    console.log("error: ", error);
    res.json(error);
  }
};
const getSingleBlog = async (req, res) => {
  try {
    res.status(200).json(req.body);
  } catch (error) {
    console.log("error: ", error);
    res.json(error);
  }
};
const updateBlog = async (req, res) => {
  try {
    res.status(200).json(req.body);
  } catch (error) {
    console.log("error: ", error);
    res.json(error);
  }
};
const deleteBlog = async (req, res) => {
  try {
    let data = await Blog.deleteMany({});
    res.json(data);
  } catch (error) {
    console.log("error: ", error);
    res.json(error);
  }
};

module.exports = {
  addBlog,
  getAllBlog,
  getSingleBlog,
  updateBlog,
  deleteBlog,
};
