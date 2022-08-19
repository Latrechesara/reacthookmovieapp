import { createSlice } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

const initialState = {
  movies: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
      return {
        ...state,
        payload,
      };
    },
    // addMovies2: (state, { payload }) => ({
    // ...state,
    // movies: payload,
    // payload,
    // }),
fetch:async (state)=>{


      const response = await movieApi
        .get(`?apikey=${APIKey}&s=${movieText}&type=movie`)

        .catch((err) => {
          console.log("Err :", err);
        });
      console.log(response.data);
    
      return {
        movies: response.data
      }

}  
}});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;
