// API Response Types
export interface WeatherData {
  city: string;
  temperature: number;
  humidity: number;
  conditions: string;
}

export interface CryptoData {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  marketCap: number;
}

export interface NewsItem {
  id: string;
  title: string;
  url: string;
  source: string;
  publishedAt: string;
}

// Redux State Types
export interface RootState {
  weather: WeatherState;
  crypto: CryptoState;
  news: NewsState;
  favorites: FavoritesState;
}

export interface WeatherState {
  data: Record<string, WeatherData>;
  loading: boolean;
  error: string | null;
}

export interface CryptoState {
  data: Record<string, CryptoData>;
  loading: boolean;
  error: string | null;
}

export interface NewsState {
  items: NewsItem[];
  loading: boolean;
  error: string | null;
}

export interface FavoritesState {
  cities: string[];
  cryptos: string[];
}