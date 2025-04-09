'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Cloud, Droplet, Wind, Thermometer } from 'lucide-react';
import type { RootState } from '@/lib/store';
import { fetchWeatherData } from '@/lib/store/weatherSlice';
import { Card } from '@/components/ui/card';

export function WeatherSection() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state: RootState) => state.weather);

  useEffect(() => {
    const cities = ['New York', 'London', 'Tokyo'];
    dispatch(fetchWeatherData(cities) as any);
  }, [dispatch]);

  if (loading) {
    return (
      <div className="animate-pulse space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-16 bg-gray-200 dark:bg-gray-700 rounded-lg" />
        ))}
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

  return (
    <div className="space-y-4">
      {Object.entries(data).map(([city, weather]) => (
        <Card key={city} className="p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {weather.name}
              </h3>
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center gap-2">
                  <Thermometer className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                  <span className="text-lg font-medium">
                    {Math.round(weather.main.temp)}°C
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Droplet className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-500 dark:text-gray-400">
                    {weather.main.humidity}%
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Cloud className="h-6 w-6 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-900 dark:text-white">
                {weather.weather[0].main}
              </span>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}