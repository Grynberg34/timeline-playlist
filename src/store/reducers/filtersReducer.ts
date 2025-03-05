import { createReducer } from '@reduxjs/toolkit';
import { setTimelineRange, setGenres } from '../actions/filtersActions';
import { clearToken } from "@/store/actions/spotifyActions";
import { resetPlaylist } from "@/store/actions/playlistActions";

interface FiltersState {
  timelineRange: { start: number; end: number };
  genres: { all: string[]; selected: string[] };
}

const allGenres = [
  "Afro", "Alternative", "Ambient", "Arab", "Blues", "Brazilian Funk", "Caribbean", "Classical", "Country", 
  "Dance/Electronic", "Folk & Acoustic", "Funk & Disco", "Hip-Hop", "Indie", "Instrumental", "Jazz", 
  "K-pop", "Latin", "Metal", "MPB", "Pop", "Punk", "R&B", "Reggae", "Rock", "Samba & Pagode", "Soul"
];

const initialState: FiltersState = {
  timelineRange: { start: 1950, end: 2025 },
  genres: { all: allGenres, selected: [] },
};

const filtersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setTimelineRange, (state, action) => {
      state.timelineRange = action.payload;
    })
    .addCase(setGenres, (state, action) => {
      state.genres.selected = action.payload;
    })
    .addCase(clearToken, () => initialState)
    .addCase(resetPlaylist, () => initialState);  
});

export default filtersReducer;
