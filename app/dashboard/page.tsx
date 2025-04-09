'use client';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { WeatherSection } from '@/components/dashboard/WeatherSection';
import { CryptoSection } from '@/components/dashboard/CryptoSection';
import { NewsSection } from '@/components/dashboard/NewsSection';
import { fetchWeatherData } from '@/lib/store/weatherSlice';
import { fetchCryptoData } from '@/lib/store/cryptoSlice';
import { fetchNewsData } from '@/lib/store/newsSlice';
import { Button } from '@/components/ui/button';
import { RefreshCw, Cloud, Coins, Newspaper, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function DashboardPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    const cities = ['New York', 'London', 'Tokyo'];
    const cryptos = ['bitcoin', 'ethereum', 'dogecoin'];

    const fetchData = () => {
      dispatch(fetchWeatherData(cities) as any);
      dispatch(fetchCryptoData(cryptos) as any);
      dispatch(fetchNewsData() as any);
    };

    fetchData();
    const interval = setInterval(fetchData, 60000);

    return () => clearInterval(interval);
  }, [dispatch]);

  const handleRefresh = () => {
    const cities = ['New York', 'London', 'Tokyo'];
    const cryptos = ['bitcoin', 'ethereum', 'dogecoin'];
    dispatch(fetchWeatherData(cities) as any);
    dispatch(fetchCryptoData(cryptos) as any);
    dispatch(fetchNewsData() as any);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 dark:from-gray-900 dark:via-blue-900/20 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Dashboard Overview
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Real-time updates on cryptocurrency and weather data
            </p>
          </div>
          <Button
            onClick={handleRefresh}
            className="group flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white"
          >
            <RefreshCw className="h-4 w-4 group-hover:rotate-180 transition-transform duration-500" />
            Refresh Data
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                <Cloud className="h-6 w-6 text-blue-500 dark:text-blue-400" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Weather Updates
              </h2>
            </div>
            <WeatherSection />
          </Card>

          <Card className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-full">
                <Coins className="h-6 w-6 text-yellow-500 dark:text-yellow-400" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Crypto Markets
              </h2>
            </div>
            <CryptoSection />
          </Card>
        </div>

        <div className="mt-8">
          <Card className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full">
                <Newspaper className="h-6 w-6 text-green-500 dark:text-green-400" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Latest News
              </h2>
            </div>
            <NewsSection />
          </Card>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                <TrendingUp className="h-6 w-6 text-purple-500 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Market Overview
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Track market trends and get insights into cryptocurrency movements
            </p>
          </Card>

          <Card className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                <Cloud className="h-6 w-6 text-blue-500 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Weather Alerts
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Stay informed about weather conditions in your selected cities
            </p>
          </Card>

          <Card className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full">
                <Newspaper className="h-6 w-6 text-green-500 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                News Updates
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Get the latest cryptocurrency news and market analysis
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}