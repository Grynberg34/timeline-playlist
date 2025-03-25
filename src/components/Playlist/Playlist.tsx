"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Grid from '@mui/material/Grid2';

const Playlist = () => {
  const playlist = useSelector((state: RootState) => state.playlist);

  console.log(playlist)

  return (
    <div className="playlist">

        <div className="playlist__header">

            {playlist.created ? (
            <a className="playlist__header__link" href={playlist.playlistLink || "#"} target="_blank" rel="noreferrer">
                Listen to the playlist on <img className="playlist__header__link__logo" src="/logo_black.svg" alt="" />
            </a>
            ) : (
            <h1 className="playlist__header__text">Creating playlist <img className="playlist__header__text__gif" src="/creating.gif" alt="" /></h1>
            )}

        </div>


        {playlist.songsByYear.map(({ year, song }) => (
            <div key={year} className="playlist__song">

                <Grid container alignItems="center" spacing={2}>
                    <Grid size={{ xs: 2, sm: 2 }}>
                        <h1 className="playlist__song__year">{year}</h1>
                    </Grid>

                    <Grid size={{ xs: 2, sm: 2 }}>
                        <a target="_blank" rel="noreferrer" href={song.album.external_urls.spotify}>
                            <img src={song.album?.images?.[0]?.url} alt={song?.name} className="playlist__song__img" />
                        </a>
                    </Grid>

                    <Grid size={{ xs: 4, sm: 5 }}>
                        <a target="_blank" rel="noreferrer" href={song.external_urls.spotify} className="playlist__song__name">{song.name}</a>
                        {song?.artists?.map((artist, index) => (
                            <a key={artist.name} href={artist.external_urls.spotify} target="_blank" rel="noreferrer" className="playlist__song__artist">
                            {artist.name}
                            {index < song.artists.length - 1 && <span className="playlist__song__artist__comma">,  </span>}
                            </a>
                        ))}
                    </Grid>

                    <Grid size={{ xs: 0, sm: 1 }}>

                        <h2 className="playlist__song__duration">
                            {song?.duration_ms
                            ? `${Math.floor(song.duration_ms / 60000)}:${String(
                                Math.floor((song.duration_ms % 60000) / 1000)
                                ).padStart(2, "0")}`
                            : "--:--"}
                        </h2>
                    </Grid>

                    <Grid size={{ xs: 3, sm: 2 }}>
                        <a target="_blank" rel="noreferrer" href={song.external_urls.spotify}>
                            <img className="playlist__song__logo" src="/logo_green.svg" alt="" />
                        </a>
                    </Grid>
                </Grid>

            </div>
        ))}

    </div>
  );
};

export default Playlist;
