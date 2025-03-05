import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createPlaylist, updateSongsByYear, setPlaylistCreated } from "../actions/playlistActions";
import { clearToken } from "@/store/actions/spotifyActions";

interface PlaylistState {
  playlistId: string | null;
  playlistLink: string | null;
  songsByYear: { year: number; song: any }[];
  created: boolean;
}

const initialState: PlaylistState = {
  playlistId: null,
  playlistLink: null,
  songsByYear: [],
  created: false
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPlaylist.fulfilled, (state, action: PayloadAction<{ playlistId: string, playlistLink: string }>) => {
        state.playlistId = action.payload.playlistId;
        state.playlistLink = action.payload.playlistLink;
      })
      .addCase(updateSongsByYear, (state, action: PayloadAction<{ year: number; song: any }>) => {
        const { year, song } = action.payload;
        const existingYear = state.songsByYear.find((entry) => entry.year === year);
        if (existingYear) {
          existingYear.song = song;
        } else {
          state.songsByYear.push({ year, song });
        }
      })
      .addCase(setPlaylistCreated, (state) => {
        state.created = true;
      })
      .addCase(clearToken, () => initialState); 
  },
});

export default playlistSlice.reducer;