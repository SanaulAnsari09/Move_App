import axios from "axios";

// created this function for apiCalled with search parameter and static keyword

const getDataFromApiWithSearchParamter = async (seachParm) => {
  const fetching = await axios.get(
    `http://www.omdbapi.com/?s=${seachParm}&apikey=dcc773e9`
  );
  return fetching;
};

// created this function for apiCalled with id for single movie data

const getDataFromApiWithMovieID = async (id) => {
  const fetching = await axios.get(
    `http://www.omdbapi.com/?i=${id}&apikey=dcc773e9`
  );
  return fetching;
};


export { getDataFromApiWithSearchParamter, getDataFromApiWithMovieID };
