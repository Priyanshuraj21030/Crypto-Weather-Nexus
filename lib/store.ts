import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './store/cryptoSlice';
import weatherReducer from './store/weatherSlice';
import newsReducer from './store/newsSlice';

export const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
    weather: weatherReducer,
    news: newsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 