"use client";
import { useSelector } from "react-redux";
import Header from '../components/Header/Header';
import Filters from '../components/Filters/Filters';
import Playlist from '../components/Playlist/Playlist';
import Footer from '../components/Footer/Footer';
import Grid from '@mui/material/Grid2';
import { RootState } from '@/store/store';

export default function Home() {

  const playlistId = useSelector((state: RootState) => state.playlist.playlistId);

  return (
    <div className="home">

      <Grid container spacing={2}>
          
        <Grid size={{ xs: 12, sm: 3 }}></Grid>

        <Grid size={{ xs: 12, sm: 6 }}>

          <Header />

          {playlistId ? <Playlist /> : <Filters />}

        </Grid>

      </Grid>

      <Footer />

    </div>
  );
}
