import {
  Song,
  SingleArtist,
  AlbumInfo,
  AlbumDetail,
  Music,
  MusicCreated,
  SongDelete,
} from "../utils/types";

import axiosClient from "./axiosClient";

export const fetchAllSongs = (): Promise<Song[]> => {
  // Get the Axios configuration object
  const config = axiosClient.defaults;

  // Construct the full URL by concatenating the base URL with the endpoint
  const fullUrl = config.baseURL + "/song/";

  // Log the full URL
  console.log("Full API URL:", fullUrl);
  console.log("11");

  const result = axiosClient.get("/song/") as Promise<Song[]>;
  console.log("fetch songs result == ", result);

  return result;
};
export const fetchAllArtists = (): Promise<Song[]> => {
  const result = axiosClient.get("/artist/") as Promise<Song[]>;
  console.log("fetch artist result == ", result);

  return result;
};
export const fetchArtistData = (artist: string): Promise<SingleArtist> => {
  const result = axiosClient.get(`/artist/${artist}`) as Promise<SingleArtist>;
  console.log("fetch artist result == ", result);

  return result;
};

export const fetchAllAlbums = (): Promise<AlbumInfo> => {
  const result = axiosClient.get("/album/") as Promise<AlbumInfo>;
  console.log("fetch album result == ", result);

  return result;
};

export const fetchAlbumDetail = (album: string): Promise<AlbumDetail> => {
  const result = axiosClient.get(`/album/${album}`) as Promise<AlbumDetail>;
  console.log("fetch album result == ", result);

  return result;
};

export const createNewMusicToServer = (music: Music): Promise<MusicCreated> => {
  console.log("sent data === ", music);

  // if (music._id) delete music._id;

  const result = axiosClient.post(`/song/`, music, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }) as Promise<MusicCreated>;
  console.log("fetch album result == ", result);

  return result;
};

export const deleteSongServer = (songId: string): Promise<SongDelete> => {
  const result = axiosClient.delete(`/song/${songId}`) as Promise<SongDelete>;
  console.log("fetch album result == ", result);

  return result;
};

export const fetchAllStats = (): Promise<AlbumInfo> => {
  const result = axiosClient.get("/song/statInfo") as Promise<AlbumInfo>;
  console.log("fetch stat result == ", result);

  return result;
};
