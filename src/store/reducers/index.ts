import { combineReducers } from "@reduxjs/toolkit";
import spotifyReducer from './spotifyReducer'; 
import filtersReducer from "./filtersReducer";

const rootReducer = combineReducers({  
  spotify: spotifyReducer,
  filters: filtersReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;