"use client"
import React from 'react';
import Spotify from '../Spotify/Spotify';

const Header = () => {

  return (
    <div className='header'>

        <Spotify />

        <h1 className='header__title'>The <span className='header__title--green'>Timeline</span> Playlist</h1>

        <h2 className='header__subtitle'>Create a playlist with one song for each year, to listen chronologically</h2>

    </div>
  );
};

export default Header;