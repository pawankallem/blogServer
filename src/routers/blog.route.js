const express = require("express");
const {
  addBlog,
  deleteBlog,
  updateBlog,
  getSingleBlog,
  getAllBlog,
} = require("../controllers/blog.controller");
const router = express.Router();

const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

router.post("/", upload.single("image"), addBlog);
router.get("/all", getAllBlog);
router.get("/:id", getSingleBlog);
router.patch("/:id", updateBlog);
router.delete("/:id", deleteBlog);

module.exports = router;
