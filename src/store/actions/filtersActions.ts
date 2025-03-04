import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

export const setTimelineRange = createAction<{ start: number; end: number }>('filters/setTimelineRange');
export const setGenres = createAction<string[]>('filters/setGenres');
export const setPopularityRange = createAction<{ min: number; max: number }>('filters/setPopularityRange');