import { createReducer } from '@reduxjs/toolkit';
import { setTimelineRange, setGenres, setPopularityRange } from '../actions/filtersActions';

interface FiltersState {
  timelineRange: { start: number; end: number };
  genres: { all: string[]; selected: string[] };
  popularityRange: { min: number; max: number };
}

const allGenres = [
  "Afro", "Alternative", "Ambient", "Arab", "Blues", "Brazilian Funk", "Caribbean", "Classical", "Country", 
  "Dance/Electronic", "Folk & Acoustic", "Funk & Disco", "Hip-Hop", "Indie", "Instrumental", "Jazz", 
  "K-pop", "Latin", "Metal", "MPB", "Pop", "Punk", "R&B", "Reggae", "Rock", "Samba & Pagode", "Soul"
];

const initialState: FiltersState = {
  timelineRange: { start: 1950, end: 2025 },
  genres: { all: allGenres, selected: [] },
  popularityRange: { min: 0, max: 100 },
};

const filtersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setTimelineRange, (state, action) => {
      state.timelineRange = action.payload;
    })
    .addCase(setGenres, (state, action) => {
      state.genres.selected = action.payload;
    })
    .addCase(setPopularityRange, (state, action) => {
      state.popularityRange = action.payload;
    });
});

export default filtersReducer;
