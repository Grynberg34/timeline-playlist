"use client";

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { fetchSpotifyUser, clearToken } from "@/store/actions/spotifyActions";
import { resetPlaylist } from "@/store/actions/playlistActions";
import { useRouter } from "next/navigation";
import Grid from '@mui/material/Grid2';
import LogoutIcon from '@mui/icons-material/Logout';

const SpotifyDashboard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const user = useSelector((state: RootState) => state.spotify.user);
  const accessToken = useSelector((state: RootState) => state.spotify.accessToken);
  const playlist = useSelector((state: RootState) => state.playlist);

  const handleLogout = () => {
    dispatch(clearToken());
  };

  const reset = () => {
    dispatch(resetPlaylist());
  };

  useEffect(() => {
    if (!accessToken) {
      router.push("/");
    } else if (!user) {
      dispatch(fetchSpotifyUser(accessToken));
    }
  }, [accessToken, user]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="spotify__dashboard">

      <Grid container spacing={2}>

        <Grid size={{ xs: 8, sm: 8 }}>

          {
            playlist.playlistId?
            <button onClick={reset} className="spotify__dashboard__button">Create New Playlist</button>
            :null
          }

        </Grid>
  

        <Grid size={{ xs: 4, sm: 4 }}>
          <div className="spotify__dashboard__content">
            {user.images && (
              <img src={user.images[0].url} alt={user.name} className="spotify__dashboard__content__img" />
            )}
            <h1 className="spotify__dashboard__content__name">{user.name}</h1>
            <LogoutIcon  className="spotify__dashboard__content__logout" onClick={handleLogout}/>
          </div>
        </Grid>

      </Grid>

      <h1 className="spotify__dashboard__name"></h1>
    </div>
  );
};

export default SpotifyDashboard;
