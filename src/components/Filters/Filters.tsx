import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import TimelineFilter from '../Filters/TimelineFilter';
import GenresFilter from '../Filters/GenresFilter';
import CreatePlaylistButton from '../Filters/CreatePlaylistButton';
import Dialog from '@mui/material/Dialog';

const Filters = () => {
  const accessToken = useSelector((state: RootState) => state.spotify.accessToken);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInteraction = (e: React.MouseEvent) => {
    if (!accessToken && !isModalOpen) {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='filters' onClick={handleInteraction}>
      <TimelineFilter />
      <GenresFilter />

      <CreatePlaylistButton />

      <Dialog open={isModalOpen} onClose={handleClose}>
        <div className="modal">
          <h1 className='modal__title'>Log in to use filters and create the playlist</h1>
          <a className='modal__link' href="/api/auth/login">Log in to <img className="modal__link__img" src="/spotify_logo.png" alt="" /></a>
          <button className='modal__close' onClick={handleClose}>Close</button>
        </div>
      </Dialog>
    </div>
  );
};

export default Filters;
