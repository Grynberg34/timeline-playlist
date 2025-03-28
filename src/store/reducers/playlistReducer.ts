import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createPlaylist, updateSongsByYear, setPlaylistCreated, resetPlaylist } from "../actions/playlistActions";
import { clearToken } from "@/store/actions/spotifyActions";
import { Track } from "@/types/Track"


interface PlaylistState {
  playlistId: string | null;
  playlistLink: string | null;
  songsByYear: { year: number; song: Track }[];
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
      .addCase(updateSongsByYear, (state, action: PayloadAction<{ year: number; song: Track }>) => {
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
      .addCase(clearToken, () => initialState) 
      .addCase(resetPlaylist, () => initialState); 
  },
});

export default playlistSlice.reducer;