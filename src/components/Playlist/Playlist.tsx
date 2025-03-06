"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Grid from '@mui/material/Grid2';

const Playlist = () => {
  const playlist = useSelector((state: RootState) => state.playlist);

  return (
    <div className="playlist">

        <div className="playlist__header">

            {playlist.created ? (
            <a className="playlist__header__link" href={playlist.playlistLink || "#"} target="_blank" rel="noreferrer">
                Listen on Spotify
            </a>
            ) : (
            <h1 className="playlist__header__text">Creating playlist <img className="playlist__header__text__gif" src="/creating.gif" alt="" /></h1>
            )}

        </div>


        {playlist.songsByYear.map(({ year, song }) => (
            <div key={year} className="playlist__song">
                <Grid container spacing={2}>
                    <Grid container alignItems="center" spacing={2}>
                    <Grid size={{ xs: 2, sm: 2 }}>
                        <h1 className="playlist__song__year">{year}</h1>
                    </Grid>

                    <Grid size={{ xs: 2, sm: 2 }}>
                        <img src={song.album?.images?.[0]?.url} alt={song?.name} className="playlist__song__img" />
                    </Grid>

                    <Grid size={{ xs: 6, sm: 6 }}>
                        <div className="playlist__song__name">{song.name}</div>
                        <div className="playlist__song__artist">
                        {song?.artists?.map((artist: any) => artist.name).join(", ")}
                        </div>
                    </Grid>

                    <Grid size={{ xs: 2, sm: 2 }}>

                        <h2 className="playlist__song__duration">
                            {song?.duration_ms
                            ? `${Math.floor(song.duration_ms / 60000)}:${String(
                                Math.floor((song.duration_ms % 60000) / 1000)
                                ).padStart(2, "0")}`
                            : "--:--"}
                        </h2>
                    </Grid>
                    </Grid>
                </Grid>
            </div>
        ))}

    </div>
  );
};

export default Playlist;
