import { combineReducers } from "@reduxjs/toolkit";
import spotifyReducer from './spotifyReducer'; 

const rootReducer = combineReducers({  
  spotify: spotifyReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;