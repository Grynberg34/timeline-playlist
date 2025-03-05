"use client"
import React from 'react';
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { createPlaylist } from "@/store/actions/playlistActions"; 

const CreatePlaylistButton = () => {

  const dispatch = useDispatch<AppDispatch>();  

  const handleCreatePlaylist = () => {

    dispatch(createPlaylist());

  };

  return (
    <div className='filters__create'>

      <button onClick={handleCreatePlaylist} className='filters__create__button'>Create Playlist</button>

    </div>
  );
};

export default CreatePlaylistButton;