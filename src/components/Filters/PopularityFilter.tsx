"use client"
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPopularityRange } from "@/store/actions/filtersActions";
import Slider from "@mui/material/Slider";

const PopularityFilter = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<number[]>([0, 100]);
  const [debouncedValue, setDebouncedValue] = useState<number[]>(value);

  const handleChange = (_event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  useEffect(() => {
    dispatch(setPopularityRange({ min: debouncedValue[0], max: debouncedValue[1] }));
  }, [debouncedValue]);

  return (
    <div className="filters__popularity">
      <h1 className="filters__popularity__title">
        <span className="green">3.</span> Choose songs popularity
      </h1>
      <Slider
        getAriaLabel={() => "Popularity range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on"
        min={0}
        max={100}
        className="filters__popularity__slider"
      />
    </div>
  );
};

export default PopularityFilter;