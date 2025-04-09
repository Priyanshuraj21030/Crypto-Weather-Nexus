'use client';

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface CryptoState {
  data: {
    [key: string]: {
      usd: number;
      usd_24h_change: number;
      usd_market_cap: number;
    };
  };
  loading: boolean;
  error: string | null;
}

const initialState: CryptoState = {
  data: {},
  loading: false,
  error: null,
};

// Add rate limiting
const RATE_LIMIT_DELAY = 1000; // 1 second delay between requests
let lastRequestTime = 0;

export const fetchCryptoData = createAsyncThunk(
  'crypto/fetchData',
  async (cryptos: string[]) => {
    try {
      // Implement rate limiting
      const now = Date.now();
      const timeSinceLastRequest = now - lastRequestTime;
      if (timeSinceLastRequest < RATE_LIMIT_DELAY) {
        await new Promise(resolve => setTimeout(resolve, RATE_LIMIT_DELAY - timeSinceLastRequest));
      }
      lastRequestTime = Date.now();

      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=${cryptos.join(',')}&vs_currencies=usd&include_24hr_change=true&include_market_cap=true`,
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          timeout: 10000, // 10 second timeout
        }
      );

      return data;
    } catch (error) {
      console.error('Error fetching crypto data:', error);
      // Return fallback data if the API call fails
      const fallbackData: { [key: string]: any } = {};
      cryptos.forEach(crypto => {
        fallbackData[crypto] = {
          usd: 0,
          usd_24h_change: 0,
          usd_market_cap: 0,
        };
      });
      return fallbackData;
    }
  }
);

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCryptoData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCryptoData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCryptoData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch crypto data';
        // Set fallback data
        state.data = {};
      });
  },
});

export default cryptoSlice.reducer;