const mongoose = require("mongoose");

function capitalizeFirstLetter(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

const SongSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      set: capitalizeFirstLetter,
    },
    artist: {
      type: String,
      set: capitalizeFirstLetter,
    },
    album: {
      type: String,
      set: capitalizeFirstLetter,
    },
    genre: {
      type: String,
      set: capitalizeFirstLetter,
    },
    musicDuration: {
      type: String,
      default: "0:00",
    },

    musicFile: {
      type: String,
    },

    artistPic: {
      type: String,
    },
    albumPic: {
      type: String,
    },
  },
  { timestamps: true }
);

const Song = mongoose.model("Song", SongSchema);
module.exports = Song;
