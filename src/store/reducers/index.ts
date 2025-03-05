import { combineReducers } from "@reduxjs/toolkit";
import spotifyReducer from './spotifyReducer'; 
import filtersReducer from "./filtersReducer";
import playlistReducer from "./playlistReducer";

const rootReducer = combineReducers({
  spotify: spotifyReducer,
  filters: filtersReducer,
  playlist: playlistReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;