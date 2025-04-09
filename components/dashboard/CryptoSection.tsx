'use client';

import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { Card } from '@/components/ui/card';
import { TrendingUp, TrendingDown } from 'lucide-react';

export function CryptoSection() {
  const { data, loading, error } = useSelector((state: RootState) => state.crypto);

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
      {Object.entries(data).map(([id, details]) => (
        <Card key={id} className="p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </h3>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                ${details.usd.toLocaleString()}
              </p>
            </div>
            <div className="text-right">
              <div className={`flex items-center gap-1 ${details.usd_24h_change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {details.usd_24h_change >= 0 ? (
                  <TrendingUp className="h-4 w-4" />
                ) : (
                  <TrendingDown className="h-4 w-4" />
                )}
                <span>{Math.abs(details.usd_24h_change).toFixed(2)}%</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                MCap: ${(details.usd_market_cap / 1e9).toFixed(2)}B
              </p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}