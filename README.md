# CryptoWeather Nexus

A modern web application that combines cryptocurrency market data with weather information, providing users with a comprehensive dashboard for tracking both financial and environmental conditions.

## Features

### Dashboard Overview
- **Real-time Crypto Market Data**
  - Live cryptocurrency prices and 24-hour changes
  - Market capitalization tracking
  - Rate-limited API calls to prevent throttling
  - Fallback data handling for API failures

- **Weather Updates**
  - Current weather conditions for major cities
  - Temperature, humidity, and weather status
  - Historical weather data tracking
  - Interactive weather charts

- **News Integration**
  - Latest cryptocurrency news
  - Weather-related news and alerts
  - Real-time news updates

### Technical Features
- **Modern UI/UX**
  - Responsive design for all screen sizes
  - Dark mode support
  - Glassmorphism effects
  - Smooth animations and transitions
  - Loading states and error handling

- **Performance Optimizations**
  - Rate-limited API calls
  - Efficient data caching
  - Optimized re-renders
  - Fallback data handling

## Tech Stack

- **Frontend**
  - Next.js 14 with App Router
  - TypeScript
  - Tailwind CSS
  - Shadcn UI Components
  - Redux Toolkit for State Management

- **APIs**
  - CoinGecko API for cryptocurrency data
  - OpenWeatherMap API for weather data
  - News API for latest updates

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/cryptoweather-nexus.git
   cd cryptoweather-nexus
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory with the following variables:
   ```
   NEXT_PUBLIC_OPENWEATHER_API_KEY=your_openweather_api_key
   NEXT_PUBLIC_NEWS_API_KEY=your_news_api_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Visit `http://localhost:3000` to see the application in action.

## Project Structure

```
project/
├── app/
│   ├── dashboard/          # Dashboard page and components
│   ├── weather/           # Weather detail pages
│   └── layout.tsx         # Root layout
├── components/
│   ├── dashboard/         # Dashboard-specific components
│   ├── ui/               # Reusable UI components
│   └── weather/          # Weather-related components
├── lib/
│   ├── store/            # Redux store and slices
│   └── utils/            # Utility functions
└── public/               # Static assets
```

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [CoinGecko API](https://www.coingecko.com/en/api)
- [OpenWeatherMap API](https://openweathermap.org/api)
- [News API](https://newsapi.org/) 