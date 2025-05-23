import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";
import { Track } from "@/types/Track"

export const createPlaylist = createAsyncThunk(
  "playlist/createPlaylist",
  async (_, { getState, dispatch }) => {
    const state = getState() as RootState;
    const accessToken = state.spotify.accessToken;
    const genres = state.filters.genres.selected;
    const { start, end } = state.filters.timelineRange;

    if (!accessToken) throw new Error("No access token found");

    const playlistName = `The Timeline Playlist (${start} - ${end})`;
    const genresDescription = genres.length > 0 ? `Genres: ${genres.join(", ")}.` : "No specific genre selected.";
    const playlistDescription = `The Timeline Playlist curates one song for each year within the chosen range. ${genresDescription}`;

    const response = await fetch(`https://api.spotify.com/v1/me/playlists`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: playlistName,
        description: playlistDescription,
        public: "false"
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error creating playlist:", errorData);
      throw new Error("Failed to create playlist");
    }

    const data = await response.json();
    const playlistId = data.id;
    const playlistLink = data.external_urls.spotify;

    dispatch(fetchSongsForYear({ playlistId }));

    return { playlistId, playlistLink };
  }
);
  
export const fetchSongsForYear = createAsyncThunk(
  "playlist/fetchSongsForYear",
  async ({ playlistId }: { playlistId: string }, { getState, dispatch }) => {
    const state = getState() as RootState;
    const accessToken = state.spotify.accessToken;
    const genres = state.filters.genres.selected;
    const { start, end } = state.filters.timelineRange;

    if (!accessToken) throw new Error("No access token found");

    const trackUris: string[] = [];

    try {
      for (let year = start; year <= end; year++) {
        const genreQuery = genres.length > 0 ? `genre:${genres.join(" ")}` : "";
        const query = encodeURIComponent(`${genreQuery} year:${year}`);
        const url = `https://api.spotify.com/v1/search?q=${query}&type=track&limit=50&market=US`;

        const response = await fetch(url, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });

        if (!response.ok) {
          throw new Error(`Error fetching data for year ${year}: ${response.statusText}`);
        }

        const data = await response.json();

        const tracks = data.tracks.items;

        if (tracks.length > 0) {
          const randomTrack = tracks[Math.floor(Math.random() * tracks.length)];
          dispatch(updateSongsByYear({ year, song: randomTrack }));

          trackUris.push(randomTrack.uri);
        }
      }

      if (trackUris.length > 0) {
        const addTracksUrl = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;

        const addTracksResponse = await fetch(addTracksUrl, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            uris: trackUris,
          }),
        });

        if (!addTracksResponse.ok) {
          const errorData = await addTracksResponse.json();
          console.error("Error adding tracks to playlist:", errorData);
          throw new Error("Failed to add tracks to playlist");
        }

        dispatch(setPlaylistCreated());
      } else {
        dispatch(setPlaylistCreated());
      }
    } catch (error) {
      console.error("Error occurred while fetching songs:", error);
      throw error;
    }
  }
);
  
export const updateSongsByYear = createAction<{ year: number; song: Track }>("playlist/updateSongsByYear");

export const setPlaylistCreated = createAction("playlist/setPlaylistCreated");

export const resetPlaylist = createAction('spotify/resetPlaylist');