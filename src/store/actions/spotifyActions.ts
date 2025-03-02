import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

export const setToken = createAction<{ accessToken: string; }>('spotify/setToken');
export const clearToken = createAction('spotify/clearToken');

export const fetchSpotifyUser = createAsyncThunk(
  "spotify/fetchUser",
  async (accessToken: string) => {
    const response = await fetch("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }

    const data = await response.json();

    return {
      id: data.id,
      name: data.display_name,
      images: data.images,
    };
  }
);