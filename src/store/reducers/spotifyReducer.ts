import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchSpotifyUser } from "../actions/spotifyActions";

interface Image {
  url: string;
  height?: number;
  width?: number;
}

interface User {
  id: string;
  name: string;
  images?: Image[];
}

interface SpotifyState {
  accessToken: string | null;
  user: User | null;
}

const initialState: SpotifyState = {
  accessToken: null,
  user: null,
};

const spotifySlice = createSlice({
  name: "spotify",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<{ accessToken: string }>) => {
      state.accessToken = action.payload.accessToken;
    },
    clearToken: (state) => {
      state.accessToken = null;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSpotifyUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const { setToken, clearToken } = spotifySlice.actions;
export default spotifySlice.reducer;