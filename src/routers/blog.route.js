const express = require("express");
const {
  addBlog,
  deleteBlog,
  updateBlog,
  getSingleBlog,
  getAllBlog,
} = require("../controllers/blog.controller");
const router = express.Router();

router.post("/", addBlog);
router.get("/all", getAllBlog);
router.get("/:id", getSingleBlog);
router.patch("/:id", updateBlog);
router.delete("/:id", deleteBlog);

module.exports = router;
