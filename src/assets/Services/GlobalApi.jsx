import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "aeb3b368b1c5b43eaa0548d98fb41930";

const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=aeb3b368b1c5b43eaa0548d98fb41930";

//https://api.themoviedb.org/3/trending/all/day?api_key=aeb3b368b1c5b43eaa0548d98fb41930
const getTrenddingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);
const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres" + id);
export default {
  getTrenddingVideos,
  getMovieByGenreId,
};
