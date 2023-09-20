const Blog = require("../models/blog.model");

const multer = require("multer");
const path = require("path");

const addBlog = async (req, res) => {
  try {
    console.log("req : ", req.body);
    const { title, content } = req.body;
    const imageUrl = req.file ? "/uploads/" + req.file.filename : "";

    const newBlog = new Blog({
      title,
      content,
      imageUrl,
    });

    await newBlog.save();

    res
      .status(201)
      .json({ data: newBlog, message: "Item created successfully" });
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
    res.status(200).json(req.body);
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
