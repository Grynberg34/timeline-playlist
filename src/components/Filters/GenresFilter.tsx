"use client"
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { setGenres } from "@/store/actions/filtersActions"
import Grid from '@mui/material/Grid2';
import { FormControlLabel, Checkbox } from "@mui/material";

const GenresFilter = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { all, selected } = useSelector((state: RootState) => state.filters.genres);
  const [showAll, setShowAll] = useState(false);

  const visibleGenres = showAll ? all : all.slice(0, 8);

  const handleGenreChange = (genre: string) => {
    const newSelected = selected.includes(genre)
      ? selected.filter((g) => g !== genre)
      : [...selected, genre];

    dispatch(setGenres(newSelected));
  };

  return (
    <div className="filters__genres">
      <h1 className="filters__genres__title">
        <span className="green">2.</span> Choose genres
      </h1>

      <Grid container spacing={2}>
        {visibleGenres.map((genre) => (
          <Grid size={{ xs: 6, sm: 3 }} key={genre}>
            <FormControlLabel
              className="filters__genres__genre"
              control={
                <Checkbox
                  className="filters__genres__genre__checkbox"
                  checked={selected.includes(genre)}
                  onChange={() => handleGenreChange(genre)}
                />
              }
              label={genre}
            />
          </Grid>
        ))}
      </Grid>

      <button onClick={() => setShowAll(!showAll)} className="filters__genres__toggle">
        {showAll ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default GenresFilter;