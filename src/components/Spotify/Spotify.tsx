"use client"
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import SpotifyLogin from './SpotifyLogin';
import SpotifyDashboard from './SpotifyDashboard';

const Spotify = () => {

  const accessToken = useSelector((state: RootState) => state.spotify.accessToken);

  return (
    <div className='spotify'>
      {!accessToken ? (
        <SpotifyLogin />
      ) : (
        <SpotifyDashboard />
      )}
    </div>
  );
};

export default Spotify;