'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from '@/components/ui/card';
import { Cloud, Droplet, Wind, Thermometer } from 'lucide-react';
import type { RootState } from '@/lib/store';
import { fetchWeatherData } from '@/lib/store/weatherSlice';

interface WeatherDetailClientProps {
  city: string;
}

export default function WeatherDetailClient({ city }: WeatherDetailClientProps) {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state: RootState) => state.weather);

  useEffect(() => {
    if (city) {
      dispatch(fetchWeatherData([city]) as any);
    }
  }, [dispatch, city]);

  if (loading) {
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-16 bg-gray-200 dark:bg-gray-700 rounded-lg" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 dark:text-red-400 text-center py-4">
        {error}
      </div>
    );
  }

  const weather = data[city];

  if (!weather || !weather.weather || weather.weather.length === 0) {
    return (
      <div className="text-gray-500 dark:text-gray-400 text-center py-4">
        No weather data available for {city}
      </div>
    );
  }

  const currentWeather = weather.weather[0];

  return (
    <div className="space-y-6">
      <Card className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {city.toUpperCase()}
          </h1>
          <div className="flex items-center gap-2">
            <Cloud className="h-6 w-6 text-gray-500 dark:text-gray-400" />
            <span className="text-gray-900 dark:text-white">{currentWeather.main}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-2 p-4 bg-gray-50 dark:bg-gray-800/30 rounded-lg">
            <Thermometer className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Temperature</p>
              <p className="text-xl font-semibold text-gray-900 dark:text-white">
                {Math.round(weather.main.temp)}°C
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 p-4 bg-gray-50 dark:bg-gray-800/30 rounded-lg">
            <Droplet className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Humidity</p>
              <p className="text-xl font-semibold text-gray-900 dark:text-white">
                {weather.main.humidity}%
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 p-4 bg-gray-50 dark:bg-gray-800/30 rounded-lg">
            <Wind className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Wind Speed</p>
              <p className="text-xl font-semibold text-gray-900 dark:text-white">
                {weather.wind.speed} m/s
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
} 