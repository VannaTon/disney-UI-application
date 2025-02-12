import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "40fa66f5e491abdaff7c50164c5994fc";

const getTrendingVideos = axios.get(
  `${movieBaseUrl}/trending/all/day?api_key=${api_key}`
);

const getMovieByGenreId = (id) =>
  axios.get(
    `${movieBaseUrl}/discover/movie?api_key=${api_key}&with_genres=${id}`
  );

export default {
  getTrendingVideos,
  getMovieByGenreId,
};