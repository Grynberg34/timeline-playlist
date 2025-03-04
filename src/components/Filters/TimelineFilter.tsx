"use client"
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTimelineRange } from "@/store/actions/filtersActions";
import Slider from "@mui/material/Slider";

const TimelineFilter = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<number[]>([1950, 2025]);
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
    dispatch(setTimelineRange({ start: debouncedValue[0], end: debouncedValue[1] }));
  }, [debouncedValue]);

  return (
    <div className="filters__timeline">
      <h1 className="filters__timeline__title">
        <span className="green">1.</span> Choose timeline
      </h1>
      <Slider
        getAriaLabel={() => "Year range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on"
        min={1950}
        max={2025}
        className="filters__timeline__slider"
      />
    </div>
  );
};

export default TimelineFilter;