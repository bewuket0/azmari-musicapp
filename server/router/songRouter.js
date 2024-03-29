const express = require("express");
const multer = require("multer");
const path = require("path");

const {
  getAllSongs,
  createSong,
  deleteSong,
  // getStats,
  StatsInfo,
} = require("../controller/songController");

const router = express.Router();

// Configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log("set a destination === ", file);
    cb(null, path.join(__dirname, "../uploads")); // Set the destination folder for storing uploaded files
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + ".jpg"); // Use a unique filename for each uploaded file, assuming all uploads are in webp format
  },
});

const fileFilter = (req, file, cb) => {
  console.log("file uploaded == ", file);
  const allowedMimeTypes = [
    "image/jpg",
    "image/jpeg",
    "image/png",
    "image/webp",
  ]; // Only allow webp format for images

  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. these file type not allowed."), false);
  }
};

console.log("++++++++++++");
const upload = multer({ storage: storage, fileFilter: fileFilter });
console.log("------------");

router
  .route("/")
  .get(getAllSongs)
  .post(
    upload.fields([
      { name: "albumPic", maxCount: 1 },
      { name: "artistPic", maxCount: 1 },
    ]),
    createSong
  );

router.route("/:songId").delete(deleteSong);
router.route("/statInfo").get(StatsInfo);
module.exports = router;
