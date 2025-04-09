'use client';

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface Wind {
  speed: number;
  deg: number;
  gust?: number;
}

interface WeatherData {
  weather: Weather[];
  main: Main;
  wind: Wind;
  name: string;
}

interface WeatherState {
  data: {
    [key: string]: WeatherData;
  };
  loading: boolean;
  error: string | null;
}

const initialState: WeatherState = {
  data: {},
  loading: false,
  error: null,
};

export const fetchWeatherData = createAsyncThunk(
  'weather/fetchData',
  async (cities: string[]) => {
    try {
      const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
      
      if (!API_KEY) {
        throw new Error('OpenWeather API key not found');
      }

      const weatherData: { [key: string]: WeatherData } = {};

      for (const city of cities) {
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather`,
          {
            params: {
              q: city,
              appid: API_KEY,
              units: 'metric',
            },
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            timeout: 10000,
          }
        );
        weatherData[city] = data;
      }

      return weatherData;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      throw error;
    }
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch weather data';
      });
  },
});

export default weatherSlice.reducer;