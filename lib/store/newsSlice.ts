'use client';

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface NewsItem {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  source: {
    name: string;
  };
}

interface NewsState {
  data: NewsItem[];
  loading: boolean;
  error: string | null;
}

const initialState: NewsState = {
  data: [],
  loading: false,
  error: null,
};

// Fallback news data in case API fails
const fallbackNews: NewsItem[] = [
  {
    title: "Bitcoin Hits New All-Time High",
    description: "Bitcoin reaches new record price levels as institutional adoption continues to grow.",
    url: "https://example.com/bitcoin-high",
    publishedAt: new Date().toISOString(),
    source: { name: "CryptoNews" }
  },
  {
    title: "Ethereum 2.0 Upgrade Complete",
    description: "Ethereum successfully completes its transition to proof-of-stake consensus mechanism.",
    url: "https://example.com/ethereum-upgrade",
    publishedAt: new Date().toISOString(),
    source: { name: "BlockchainDaily" }
  },
  {
    title: "Crypto Market Analysis",
    description: "Expert analysis of current cryptocurrency market trends and future predictions.",
    url: "https://example.com/market-analysis",
    publishedAt: new Date().toISOString(),
    source: { name: "CryptoInsights" }
  }
];

export const fetchNewsData = createAsyncThunk(
  'news/fetchData',
  async () => {
    try {
      const API_KEY = process.env.NEXT_PUBLIC_NEWSDATA_API_KEY;
      
      if (!API_KEY) {
        console.warn('News API key not found, using fallback data');
        return fallbackNews;
      }

      const { data } = await axios.get(
        'https://newsdata.io/api/1/news',
        {
          params: {
            apikey: API_KEY,
            q: 'cryptocurrency',
            language: 'en',
            size: 5
          },
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          timeout: 10000,
        }
      );

      return data.results.map((article: any) => ({
        title: article.title,
        description: article.description || 'No description available',
        url: article.link,
        publishedAt: article.pubDate,
        source: { name: article.source_name }
      }));
    } catch (error) {
      console.error('Error fetching news data:', error);
      return fallbackNews;
    }
  }
);

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewsData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNewsData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchNewsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch news data';
        state.data = fallbackNews;
      });
  },
});

export default newsSlice.reducer;